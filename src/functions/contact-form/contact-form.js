// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
require('dotenv').config();
const sendMail = require('sendmail')();
const { validateEmail, validateLength } = require('./validations');

function transformBodyToJSON(body) {
  console.log(body);
  return JSON.parse(
    '{"' +
      body
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/%40/g, '@')
        .replace(/=/g, '":"') +
      '"}'
  );
}

export const handler = (event, context, callback) => {
  if (!process.env.CONTACT_EMAIL) {
    return callback(null, {
      statusCode: 500,
      body: 'process.env.CONTACT_EMAIL must be defined',
    });
  }

  const body = transformBodyToJSON(event.body);
  console.log(body);
  try {
    validateLength('body.name', body.name, 3, 50);
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message,
    });
  }

  try {
    validateEmail('body.email', body.email);
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message,
    });
  }

  try {
    validateLength('body.message', body.message, 10, 1000);
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message,
    });
  }

  const descriptor = {
    from: `"${body.email}" <${body.email}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `${body.name} sent you a message from gql-modules.com`,
    text: body.message,
  };

  sendMail(descriptor, e => {
    if (e) {
      callback(null, {
        statusCode: 500,
        body: e.message,
      });
    } else {
      callback(null, {
        statusCode: 200,
        body: '',
      });
    }
  });
};
