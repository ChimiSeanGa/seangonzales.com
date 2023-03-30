import * as React from 'react'
import { useInView } from "react-intersection-observer";
import {
   fadeInOutSection,
   sectionInView
} from "./fade-in-out-section.module.css";

const FadeInOutSection = ({ threshold, children }) => {
   const { ref, inView } = useInView({
      threshold: threshold
   });

   return (
      <div ref={ref}>
         <div className={`${fadeInOutSection} ${inView ? sectionInView : ''}`}>
            { children }
         </div>
      </div>
   );
}

export default FadeInOutSection