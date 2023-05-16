import * as React from 'react'
import { motion } from "framer-motion";
import {
   container,
} from './page-layout.module.css'

const PageLayout = ({ children }) => {
   return (
      <motion.main
         initial={{ opacity: 0, x: -200 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 200 }}
         transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.3
         }}
      >
         <div className={container}>
            {children}
         </div>
      </motion.main>
   );
}

export default PageLayout
