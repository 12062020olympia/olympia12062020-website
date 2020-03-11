Repository for the website of the 12062020 Olympa Project.

Created from [Gatsby Starter Contentful](https://github.com/wataruoguchi/gatsby-starter-typescript-contentful).

Core Technologies:

- Gatsby with Contentful Integration
- React
- Typescript
- styled-components

Published Data: [![Netlify Status](https://api.netlify.com/api/v1/badges/6b365c82-a013-4e1c-89dc-2bf6a86bc864/deploy-status)](https://app.netlify.com/sites/olympia-12062020/deploys)

Preview Data: [![Netlify Status](https://api.netlify.com/api/v1/badges/6b365c82-a013-4e1c-89dc-2bf6a86bc864/deploy-status)](https://app.netlify.com/sites/olympia-12062020/deploys)

## Development Setup

1. Clone repository
2. Navigate into site’s directory and install dependencies
   ```shell
   yarn install
   ```
3. Copy `.env.default` to `.env` and set Space Id and access token from Contentful ([Where to get these tokens](https://www.contentful.com/developers/docs/references/authentication/))
4. Start it up:

   ```shell
   yarn start
   ```

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying the data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._
