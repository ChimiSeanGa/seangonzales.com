import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import { container, canvasWrapper } from './p5-applet.module.css';

const P5Applet = ({ sketch }) => {
   const sketchRef = useRef();

   useEffect(() => {
      const myP5 = new p5(sketch, sketchRef.current);

      return () => {
         myP5.remove();
      }
   }, []);

   return (
      <div className={container}>
         <div ref={sketchRef} className={canvasWrapper} id="p5Wrapper"></div>
      </div>
   );
}

export default P5Applet