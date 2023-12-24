/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
   siteMetadata: {
      title: `Sean Gonzales`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   flags: {
     DEV_SSR: true
   },
   plugins: [
     "gatsby-plugin-image",
     "gatsby-plugin-sharp",
     "gatsby-plugin-react-helmet",
     {
        resolve: "gatsby-source-filesystem",
        options: {
           name: `coding_projects`,
           path: `${__dirname}/coding_projects`,
        }
     },
     {
        resolve: "gatsby-source-filesystem",
        options: {
           name: `art_projects`,
           path: `${__dirname}/art_projects`,
        }
     },
     {
        resolve: "gatsby-source-filesystem",
        options: {
           name: `applets`,
           path: `${__dirname}/applets`,
        }
     },
     "gatsby-plugin-mdx",
     {
        resolve: "gatsby-remark-images",
        options: {
           maxWidth: 780,
        }
     },
     "gatsby-transformer-sharp",
  ],
}
