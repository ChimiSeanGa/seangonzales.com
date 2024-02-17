import * as React from 'react'
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";
import Seo from "../components/seo";
import P5Applet from "../components/p5-applet";

const Applet = ({ data, children }) => {
   const [sketch, setSketch] = React.useState(null);

   const image = getImage(data.mdx.frontmatter.hero_image);
   import(`../scripts/sketches/${data.mdx.frontmatter.slug}.js`).then(result => setSketch(result));

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
            {sketch ? <P5Applet sketch={sketch.default} /> : null}
         </PageContent>
      </PageLayout>
   )
}

export const query = graphql`
   query MyQuery($id: String) {
      mdx(id: {eq: $id}) {
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
                     transformOptions: { fit: COVER, cropFocus: CENTER }
                  )
               }
            }
         }
      }
   }
`

export const Head = () => <Seo title="Applet" />

export default Applet