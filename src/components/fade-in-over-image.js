import * as React from 'react'
import {
   fioiWrapper,
   fioiHeader,
   fioiContentWrapper
} from "./fade-in-over-image.module.css";
import {useEffect, useState} from "react";

const FadeInOverImage = ({ headerImageElement, children }) => {
   const [scrollPercent, setScrollPercent] = useState(0);

   useEffect(() => {
      const onScroll = () => {
         const h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';

         setScrollPercent((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight));
      };
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
   }, [scrollPercent]);

   return (
      <div className={fioiWrapper}>
         <div className={fioiHeader}>
            { headerImageElement() }
         </div>
         <div className={fioiContentWrapper} style={{opacity: scrollPercent*2}}>
            { children }
         </div>
      </div>
   );
}

export default FadeInOverImage