import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';
import { GiMoebiusTriangle } from "react-icons/all";
import {
   container,
   navbar,
   homeLink,
   homeLogo,
   navLinks,
   navLinkItem,
   navLinkText,
} from './layout.module.css'
import './styles.css'

const Layout = ({ children }) => {
   return [
      <Helmet>
         <html lang="en" />
         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
         <link rel="manifest" href="/site.webmanifest" />
         <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
         <meta name="msapplication-TileColor" content="#da532c" />
         <meta name="theme-color" content="#ffffff" />
      </Helmet>,
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
   ];
}

export default Layout
