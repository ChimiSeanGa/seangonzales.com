import * as React from 'react'
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";
import Seo from "../components/seo";

const TeachingPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="Teaching">
            <p>Current and past courses I've taught.</p>
            <h2>Current Courses</h2>
            <ul>
               <li><a href="https://math.berkeley.edu/~apaulin/Math%201%20(Fall%202023).html">
                  Math 1 - Fundamentals of Lower Division Mathematics
               </a>, Fall 2023</li>
            </ul>

            <h2>Past Courses</h2>
            <ul>
               <li><a href="https://math.berkeley.edu/~sgonzales/pce.html">
                  Pre-Calculus Essentials Workshop
               </a>, Spring 2023</li>
               <li>Math 55 LEC 001 - Discrete Mathematics (DIS 104, 105), Fall 2022</li>
               <li>Math 1A LEC 002 - Calculus (DIS 202, 205), Fall 2021</li>
               <li>Math N1A LEC 003 - Calculus, Summer 2021</li>
               <li>Math 1A LEC 001 - Calculus (DIS 101, 103), Spring 2021</li>
               <li>Math 1A LEC 001 - Calculus (DIS 101, 107), Fall 2020</li>
            </ul>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <Seo title="Teaching" />

export default TeachingPage
