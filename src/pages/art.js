import * as React from 'react'
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";

const ArtPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="Art">
            <p>My art</p>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <title>Art</title>

export default ArtPage