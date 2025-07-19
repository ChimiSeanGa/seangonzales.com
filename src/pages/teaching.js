import * as React from 'react'
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";
import Seo from "../components/seo";
import {StaticImage} from "gatsby-plugin-image";
import PageImage from "../components/page-image";

const TeachingPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="Teaching and Tutoring">
            <h2>Tutoring</h2>
            <PageImage side="right">
               <StaticImage src={"../images/sean_teaching.png"} alt={"Sean writing math on blackboard"} />
            </PageImage>
            <h3>One-on-one Math and CS Tutoring</h3>
                  I am currently accepting clients for one-on-one tutoring in math and computer science.

            <ul>
               <li><b>Ages:</b> High school through college</li>
               <li><b>Rate:</b> $75 per hour</li>
               <li><b>Location:</b> Berkeley/Oakland area or online via Zoom. I can drive to you.</li>
               <li>
                  <b>Subjects:</b>
                  <ul>
                     <li>High school math <i>(algebra, geometry, pre-calculus, calculus)</i></li>
                     <li>High school computer science</li>
                     <li>SAT, ACT, and AP test math prep</li>
                     <li>College math <i>(calculus, linear algebra, differential equations, etc.)</i></li>
                     <li>College computer science <i>(data structures, programming languages, etc.)</i></li>
                     <li>GRE math prep</li>
                  </ul>
               </li>
               <li>
                  <b>Qualifications:</b>
                  <ul>
                     <li>Current UC Berkeley math PhD candidate</li>
                     <li>5+ years of teaching experience at UC Berkeley (calculus, linear algebra, etc.)</li>
                     <li>Former SAT prep tutor at Elite Prep Fremont</li>
                     <li>B.S. in both math and computer science</li>
                     <li>Former Apple software developer</li>
                  </ul>
               </li>
            </ul>
            Please contact me at <a href="mailto:seang696@gmail.com">seang696@gmail.com</a> or <a href="sms:+16613787167">(661) 378-7167</a> if you would like to set up a tutoring session.

            <h2>Teaching at UC Berkeley</h2>
            <h3>Recent Student Reviews</h3>
            <ul>
               <li>"Sean was great! He created an encouraging environment and was very attentive to students' questions, as well as being an
                  organized and clear instructor." - <i>Spring 2025</i></li>
               <li>"Sean is a very fun and engaging person. He is well prepared and organized when it comes to his notes and going over key
                  concepts. He is also open and and thoroughly answers student's questions. He always wants the best for us." - <i>Fall 2024</i></li>
               <li>"bro is the goat" - <i>Spring 2025</i></li>
            </ul>

            <h3>Current Courses</h3>
            I am not teaching during Summer 2025.
            {/*<ul>*/}
            {/*   */}
            {/*</ul>*/}

            <h3>Past Courses</h3>
            <ul>
               <li>Math 110 LEC 001 - Abstract Linear Algebra (DIS 107, 117, 119), Spring 2025</li>
               <li><a href="https://math.berkeley.edu/~sgonzales/math1_fall2024" target="_blank" rel="noreferrer">Math 1 LEC 001 - Foundations of Lower Division Mathematics</a>, Fall 2024</li>
               <li>Math 54 LEC 001 - Linear Algebra and Differential Equations (DIS 107), Spring 2024</li>
               <li><a href="https://math.berkeley.edu/~apaulin/Math%201%20(Fall%202023).html" target="_blank"
                      rel="noreferrer">
                  Math 1 LEC 001 - Foundations of Lower Division Mathematics
               </a>, Fall 2023
               </li>
               <li><a href="https://math.berkeley.edu/~sgonzales/pce.html" target="_blank" rel="noreferrer">
                  Pre-Calculus Essentials Workshop
               </a>, Spring 2023
               </li>
               <li>Math 55 LEC 001 - Discrete Mathematics (DIS 104, 105), Fall 2022</li>
               <li>Math 1A LEC 002 - Calculus (DIS 202, 205), Fall 2021</li>
               <li>Math N1A LEC 003 - Calculus, Summer 2021</li>
               <li>Math 1A LEC 001 - Calculus (DIS 101, 103), Spring 2021</li>
               <li>Math 1A LEC 001 - Calculus (DIS 101, 107), Fall 2020</li>
            </ul>

            <h3>Mentoring</h3>
            Below is a list of undergraduate students that I have mentored through the <a href="https://math.berkeley.edu/wp/drp/" target="_blank" rel="noreferrer">Directed Reading Program (DRP)</a> at UC Berkeley, along with the title of our project.
            <ul>
               <li>Shrishti Dalal, "Expander Graphs and Error-correcting Codes", Spring 2025</li>
               <li>McKinley Keys, "The Kyber Post-Quantum Cryptographic Algorithm", Fall 2024</li>
               <li>Yunchi Zheng, "Modular Forms and Modular Curves", Spring 2024</li>
               <li>Zain Shields, "Congruences of the Partition Function", Fall 2023</li>
               <li>Wenqing Wei, "Modular Forms and Galois Representations", Spring 2023</li>
               <li>Seongwon Ko, "Elliptic Curves and Cryptography", Fall 2022</li>
            </ul>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <Seo title="Teaching" />

export default TeachingPage
