import * as React from 'react'
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";

const ResearchPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="Research">
            <p>My research</p>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <title>Research</title>

export default ResearchPage
