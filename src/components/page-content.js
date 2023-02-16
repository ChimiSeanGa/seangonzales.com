import * as React from 'react'
import {
   container,
   pageTitleText
} from './page-content.module.css'

const PageContent = ({ pageTitle, children }) => {
   return (
      <div className={container}>
         <main>
            <h1 className={pageTitleText}>{pageTitle}</h1>
            {children}
         </main>
      </div>
   )
}

export default PageContent