// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
require('dotenv').config();
const nodemailer = require('nodemailer');

export const handler = (event, context, callback) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.de',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  if (!process.env.CONTACT_EMAIL) {
    return callback(null, {
      statusCode: 500,
      body: 'process.env.CONTACT_EMAIL must be defined',
    });
  }

  const body = JSON.parse(event.body);

  if (body.botField) {
    return callback(null, {
      statusCode: 401,
      body: 'You are not human',
    });
  }

  let receiverMail = process.env.CONTACT_EMAIL;

  if (body.category === 'tickets' && process.env.CONTACT_EMAIL_TICKETS) {
    receiverMail = process.env.CONTACT_EMAIL_TICKETS;
  }

  if (body.category === 'petitions' && process.env.CONTACT_EMAIL_PETITIONS) {
    receiverMail = process.env.CONTACT_EMAIL_PETITIONS;
  }

  if (body.category === 'volunteer' && process.env.CONTACT_EMAIL_VOLUNTEER) {
    receiverMail = process.env.CONTACT_EMAIL_VOLUNTEER;
  }

  if (body.category === 'press' && process.env.CONTACT_EMAIL_PRESS) {
    receiverMail = process.env.CONTACT_EMAIL_PRESS;
  }

  const data = {
    from: process.env.SENDER_EMAIL,
    replyTo: body.email,
    to: receiverMail,
    subject: `[KONTAKTFORMULAR] ${body.name}: ${body.subject}`,
    text: body.message,
  };

  transporter.sendMail(data, e => {
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
