const path = require('path');

// query page content from contentful and dynamically create page for each page found
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const pageTemple = path.resolve('src/templates/page.js');
    resolve(
      graphql(`
        {
          allContentfulPage(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulPage.edges.forEach(edge => {
          createPage({
            path: edge.node.slug !== 'home' ? edge.node.slug : '/',
            component: pageTemple,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        return;
      })
    );
  });
};

// create pages for differ locales
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  // You can access the variable "locale" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  });
};
