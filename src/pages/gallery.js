import * as React from 'react'
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";

const GalleryPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="Gallery">
            <p>My gallery</p>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <title>Gallery</title>

export default GalleryPage
