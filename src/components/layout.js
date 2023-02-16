import * as React from 'react'
import { Link } from 'gatsby'
import { GiMoebiusTriangle } from "react-icons/all";
import {
   container,
   navbar,
   homeLink,
   homeLogo,
   navLinks,
   navLinkItem,
   navLinkText
} from './layout.module.css'
import './styles.css'

const Layout = ({ children }) => {
   return (
      <div className={container}>
         <nav className={navbar}>
            <Link to="/" className={homeLink}>
               <GiMoebiusTriangle className={homeLogo}/>Sean Gonzales
            </Link>
            <ul className={navLinks}>
               <li className={navLinkItem}>
                  <Link to="/gallery" className={navLinkText}>Gallery</Link>
               </li>
               <li className={navLinkItem}>
                  <Link to="/teaching" className={navLinkText}>Teaching</Link>
               </li>
               <li className={navLinkItem}>
                  <Link to="/research" className={navLinkText}>Research</Link>
               </li>
               <li className={navLinkItem}>
                  <Link to="/about" className={navLinkText}>About</Link>
               </li>
            </ul>
         </nav>
         <main>
            {children}
         </main>
      </div>
   )
}

export default Layout
