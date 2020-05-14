/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({actions, graphql, reporter}) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            title
          }
        }
      }
    }
 `);

 if(result.error) {
  reporter.panic('There was a problem loading your project')
  return;
}

 const projects = result.data.allProjectsJson.edges;
 {/*For each instead of map as not no values are being returned*/}
 projects.forEach(({ node: {title} }) => {
   actions.createPage({
     path: `/${title}/`,
     component: require.resolve('./src/templates/project.js'),
     context: {title}
   })
 })
}
