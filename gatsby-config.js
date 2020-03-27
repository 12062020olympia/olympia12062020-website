require('dotenv').config();
const proxy = require('http-proxy-middleware').createProxyMiddleware;

module.exports = {
  siteMetadata: {
    title: `12062020 Olympia`,
    description: `Olympia - die unglaubliche Geschichte. Mit +70.000 Menschen wollen wir Euch bei diesem einzigartigen Demokratiefestival eine Bühne geben. Bringt Eure Petitionsvorschläge ein und macht sie zu unglaublichen Geschichten.`,
    author: `@12062020olympia`,
  },
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /* eslint-disable @typescript-eslint/camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Olympia 1206202 Website`,
        short_name: `12062020`,
        start_url: `/`,
        background_color: `#F9D2B0`,
        theme_color: `#F9D2B0`,
        display: `minimal-ui`,
        icon: `src/images/olympia-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
        host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`de`, `en`],
        // language file path
        defaultLanguage: `de`,
        // option to redirect to `/de` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Roboto, Hanson'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
};
