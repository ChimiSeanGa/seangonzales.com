import * as React from 'react'
import {
   container,
} from './page-layout.module.css'

const PageLayout = ({ children }) => {
   return (
      <div className={container}>
         {children}
      </div>
   )
}

export default PageLayout
