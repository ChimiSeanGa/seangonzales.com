import * as React from 'react';
import {
   container
} from "./page-image.module.css";

const PageImage = ({ children }) => {
   return (
      <div className={container}>
         { children }
      </div>
   )
}

export default PageImage