import * as React from 'react'
import Layout from "./src/components/layout";
import { AnimatePresence } from "framer-motion";

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
   return (
      <AnimatePresence mode='wait'>
         <Layout {...props}>{element}</Layout>
      </AnimatePresence>
   );
}
