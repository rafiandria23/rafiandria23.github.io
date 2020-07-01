exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      projects: allStrapiProject {
        edges {
          node {
            strapiId
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data.projects.edges;

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.node.strapiId}`,
      component: require.resolve(`./src/templates/project.tsx`),
      context: {
        id: project.node.strapiId
      }
    });
  });
}
