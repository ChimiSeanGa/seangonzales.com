import * as React from 'react'
import p5 from 'p5';
import { container, canvasWrapper } from './p5-applet.module.css';

const P5Applet = ({ sketch }) => {
   const sketchRef = React.useRef();

   React.useEffect(() => {
      let myP5;
      if (sketch) {
         myP5 = new p5(sketch, sketchRef.current);
      }

      return () => {
         if (myP5) {
            myP5.remove();
         }
      }
   }, [sketch]);

   return (
      <div className={container}>
         <div ref={sketchRef} className={canvasWrapper} id="p5Wrapper"></div>
      </div>
   );
}

export default P5Applet