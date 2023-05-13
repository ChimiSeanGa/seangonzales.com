import * as React from 'react'
import PageLayout from "../components/page-layout"
import PageContent from "../components/page-content"
import PageImage from "../components/page-image";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="About">
            <PageImage>
               <StaticImage
                  src="../images/artdisplay.png"
                  alt="Myself in front of a table displaying some of my computer generated art"
               />
            </PageImage>
            <p>
               I'm a graduate student in mathematics at the University of California at Berkeley.
               My areas of interest include elliptic curves, Galois representations, automorphic forms,
               Shimura varieties, and the larger scope of the Langlands program. I am particularly interested
               in the role of Hasse invariants in the association between automorphic representations and Galois
               representations. As a visual learner with a background in programming, I enjoy problems with
               a strong geometric presence that benefit from computational investigations. I believe that number
               theory conceals a treasure trove of visual beauty that we are only just now beginning to unearth.
            </p>
            <h2>An Overview</h2>
            <ul>
               <li><b>Graduate Student</b> at UC Berkeley, 2020-Present</li>
               <li><b>Software Engineer</b> at Apple, Inc., 2019-2020</li>
               <li><b>B.S.</b> in Computer Science and Pure Mathematics at Cal Poly SLO, June 2019</li>
               <li><b>Intern</b> at Apple, Inc. as a web developer, Summer 2018</li>
            </ul>
            <h2>Contact Info</h2>
            <ul>
               <li>Office 1008, Evans Hall, UC Berkeley</li>
               <li>Email: <a href="mailto:sgonzales@math.berkeley.edu">sgonzales@math.berkeley.edu</a></li>
            </ul>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <title>Sean Gonzales</title>

export default IndexPage
