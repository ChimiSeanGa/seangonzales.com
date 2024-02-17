import * as React from 'react'
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";
import Seo from "../components/seo";
import Gallery from '@browniebroke/gatsby-image-gallery';

const ArtProject = ({ data, children }) => {
   const image = getImage(data.mdx.frontmatter.hero_image);
   const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
   return (
      <PageLayout>
         <PageContent pageTitle={data.mdx.frontmatter.title}>
            <div style={{border: "1px solid black"}}>
               <GatsbyImage
                  alt={data.mdx.frontmatter.hero_image_alt}
                  image={image}
               />
            </div>
            {children}
            <h2>Gallery</h2>
            <Gallery images={images} />
         </PageContent>
      </PageLayout>
   )
}

export const query = graphql`
   query MyQuery($id: String, $galleryPath: String) {
      mdx(id: {eq: $id}) {
         frontmatter {
            title
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
               childImageSharp {
                  gatsbyImageData(
                     layout: FULL_WIDTH
                     aspectRatio: 1.77
                     placeholder: BLURRED
                     transformOptions: { fit: COVER, cropFocus: CENTER }
                  )
               }
            }
         }
      }
      allFile(filter: {relativeDirectory: {eq: $galleryPath}}) {
         edges {
            node {
               childImageSharp {
                  thumb: gatsbyImageData(
                     width: 200
                     height: 200
                     placeholder: BLURRED
                  )
                  full: gatsbyImageData(
                     layout: FULL_WIDTH
                  )
               }
            }
         }
      }
   }
`

export const Head = () => <Seo title="Art Project" />

export default ArtProject