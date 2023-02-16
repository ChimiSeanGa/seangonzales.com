import * as React from 'react'
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";

const TeachingPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="Teaching">
            <p>My teaching duties</p>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <title>Teaching</title>

export default TeachingPage
