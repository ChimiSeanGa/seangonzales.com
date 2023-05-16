import * as React from 'react'
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";

const CodingPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="Coding">
            <p>My research</p>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <title>Research</title>

export default CodingPage
