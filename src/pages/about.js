import * as React from 'react'
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";

const AboutPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="About">
            <p>About me!</p>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <title>About</title>

export default AboutPage
