import * as React from 'react'
import {
   container,
   imageTextOverlay
} from "./page-header.module.css"

const PageHeader = ({ textOverlay, children }) => {
   return (
      <div className={container}>
         {children}
         <div className={imageTextOverlay}>
            {textOverlay}
         </div>
      </div>
   )
}

export default PageHeader