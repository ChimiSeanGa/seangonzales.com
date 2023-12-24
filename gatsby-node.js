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