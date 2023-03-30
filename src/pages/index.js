import * as React from 'react'
import PageLayout from "../components/page-layout"
import PageHeader from "../components/page-header"
import PageContent from "../components/page-content"
import FadeInOverImage from "../components/fade-in-over-image";
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
   const headerImageElement = () => (
      <PageHeader textOverlay={"Sean Gonzales"}>
         <StaticImage
            src="../images/sfskyline.jpeg"
            alt="The skyline of San Francisco, California"
            placeholder="blurred"
         />
      </PageHeader>
   );
   return (
      <PageLayout>
         <FadeInOverImage headerImageElement={headerImageElement}>
            <PageContent pageTitle="Welcome">
               <p>
                  Hi! My name is Sean, and I'm a graduate student in mathematics
                  at the University of California at Berkeley. My research focuses
                  on Shimura varieties and automorphic representations. In my spare
                  time, I create computational art and mathematical visualizations.
                  This website serves as a hub for my research, teaching, art, and
                  more. Take a look around and explore!
               </p>
            </PageContent>
         </FadeInOverImage>
      </PageLayout>
   )
}

export const Head = () => <title>Sean Gonzales</title>

export default IndexPage
