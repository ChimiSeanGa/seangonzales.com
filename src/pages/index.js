import * as React from 'react'
import PageLayout from "../components/page-layout"
import PageHeader from "../components/page-header"
import PageContent from "../components/page-content"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
   return (
      <PageLayout>
         <PageHeader textOverlay="Sean Gonzales">
            <StaticImage
               src="../images/sfskyline.jpeg"
               alt="The skyline of San Francisco, California"
               placeholder="blurred"
            />
         </PageHeader>
         <PageContent pageTitle="Welcome">
            <p>Welcome to my website!</p>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <title>Sean Gonzales</title>

export default IndexPage
