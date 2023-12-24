const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
   const { createPage } = actions;

   const result = await graphql(`
      query {
         allMdx {
            nodes {
               id
               frontmatter {
                  slug
                  variant
               }
               internal {
                  contentFilePath
               }
            }
         }
      }
   `);

   if (result.errors) {
      reporter.panicOnBuild('Error loading MDX result', result.errors);
   }

   const posts = result.data.allMdx.nodes;

   posts.forEach(node => {
      let postTemplate = null;
      let context = {};
      if (node.frontmatter.variant === "art") {
         postTemplate = path.resolve('./src/templates/art-project.js');
         context = { galleryPath: `${node.frontmatter.slug}/gallery` };
      } else if (node.frontmatter.variant === "applets") {
         postTemplate = path.resolve('./src/templates/applet.js');
      } else if (node.frontmatter.variant === "coding") {
         postTemplate = path.resolve('./src/templates/coding-project.js');
      }
      createPage({
         path: `${node.frontmatter.variant}/${node.frontmatter.slug}`,
         component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
         context: {
            ...context,
            id: node.id,
         }
      });
   });
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
   if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
         module: {
            rules: [
               {
                  test: /p5/,
                  use: loaders.null(),
               },
            ],
         },
      })
   }
}