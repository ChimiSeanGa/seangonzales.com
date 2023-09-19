import * as React from 'react'
import { Link, graphql } from "gatsby";
import PageLayout from "../../components/page-layout";
import PageContent from "../../components/page-content";
import Seo from "../../components/seo";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const ArtPage = ({ data }) => {
   return (
      <PageLayout>
         <PageContent pageTitle="Art">
            {
               data.allMdx.nodes.map((node) => {
                  const image = getImage(node.frontmatter.hero_image);
                  return (
                     <article key={node.id}>
                        <h2>
                           <Link to={`/art/${node.frontmatter.slug}`}>
                              {node.frontmatter.title}
                           </Link>
                        </h2>
                        <div style={{border: "1px solid black"}}>
                           <GatsbyImage
                              alt={node.frontmatter.hero_image_alt}
                              image={image}
                           />
                        </div>
                     </article>
                  )
               })
            }
         </PageContent>
      </PageLayout>
   )
}

export const query = graphql`
   query MyQuery {
      allMdx(sort: {frontmatter: {slug: ASC}}, filter: {frontmatter: {variant: {eq: "art"}}}) {
         nodes {
            frontmatter {
               title
               slug
               hero_image_alt
               hero_image_credit_link
               hero_image_credit_text
               hero_image {
                  childImageSharp {
                     gatsbyImageData(
                        layout: FULL_WIDTH
                        aspectRatio: 1.77
                        placeholder: BLURRED
                     )
                  }
               }
            }
            id
         }
      }
   }
`

export const Head = () => <Seo title="Art" />

export default ArtPage
