import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';
import {
   container,
   navbar,
   navLinksOpen,
   navbarButton,
   navbarName,
   navLinks,
   navLinkItem,
   navLinkText,
   footer,
} from './layout.module.css'
import './styles.css'
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {
   const [navOpen, setNavOpen] = React.useState(false);
   const dropdownToggle = () => {
      setNavOpen((current) => !current);
   };
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
         <div>
            <StaticImage
               src="../images/squares.png"
               alt={"Domain coloring of a random finite Blaschke product"}
            />
         </div>
         <nav className={navbar}>
            <button
               aria-label="Dropdown menu"
               className={navbarButton}
               onClick={dropdownToggle}
            >
               <div id="nav-icon3" className={`${navOpen ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </button>
            <div className={navbarName}>
               Sean Gonzales
            </div>
            <ul className={`${navLinks} ${navOpen ? navLinksOpen : ""}`}>
               <li className={navLinkItem}>
                  <Link to="/" className={navLinkText}>Home</Link>
               </li>
               <li className={navLinkItem}>
                  <Link to="/art" className={navLinkText}>Art</Link>
               </li>
               <li className={navLinkItem}>
                  <Link to="/applets" className={navLinkText}>Applets</Link>
               </li>
               <li className={navLinkItem}>
                  <Link to="/teaching" className={navLinkText}>Teaching</Link>
               </li>
               <li className={navLinkItem}>
                  <Link to="/research" className={navLinkText}>Research</Link>
               </li>
               <li className={navLinkItem}>
                  <Link to="/coding" className={navLinkText}>Coding</Link>
               </li>
            </ul>
         </nav>
         <main>
            {children}
         </main>
         <div className={footer}>
            Copyright &#169; 2023 Sean Gonzales. All rights reserved.
         </div>
      </div>
   ];
}

export default Layout
