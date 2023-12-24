exports.onCreatePage = ({ page, actions }) => {
   const { createPage, deletePage } = actions

   deletePage(page)
   createPage({
      ...page,
      context: {
         ...page.context,
         galleryPath: `${page.context.frontmatter__slug}/gallery`
      },
   })
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