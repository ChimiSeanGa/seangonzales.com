import * as React from 'react';
import {
   containerLeft,
    containerRight,
} from "./page-image.module.css";

const PageImage = ({ children, side="left" }) => {
   return (
      <div className={side === "left" ? containerLeft : containerRight}>
         { children }
      </div>
   )
}

export default PageImage