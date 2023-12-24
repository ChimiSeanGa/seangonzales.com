import * as React from 'react'
import { graphql } from "gatsby";
import PageLayout from "../../components/page-layout";
import PageContent from "../../components/page-content";
import Seo from "../../components/seo";
import ProjectListItem from "../../components/project-list-item";

const ArtPage = ({ data }) => {
   return (
      <PageLayout>
         <PageContent pageTitle="Art">
            {
               data.allMdx.nodes.map((node) => {
                  return (
                     <article key={node.id}>
                        <ProjectListItem node={node} subdirectory={"art"} />
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
                        aspectRatio: 1
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
