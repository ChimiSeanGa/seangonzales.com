import * as React from 'react'
import PageLayout from "../components/page-layout";
import PageContent from "../components/page-content";
import Seo from "../components/seo";

const ResearchPage = () => {
   return (
      <PageLayout>
         <PageContent pageTitle="Research">
            <h2>Publications</h2>
            <ul>
               <li>
                  Sean Gonzales. <i><a href="/papers/Compact_Abelian_Type_Hasse_Invariants.pdf">Strata Hasse Invariants on Proper Abelian Type Shimura Varieties and Applications to Galois Representations</a></i>. In preparation.
               </li>
               <li>
                  Sean Gonzales and Theresa Migler. “<a href="https://link.springer.com/chapter/10.1007/978-3-030-36687-2_10">The Densest k Subgraph Problem in b-Outerplanar Graphs</a>”. In: <i>Complex Networks and Their Applications VIII</i>. Ed. by Hocine Cherifi et al. Cham: Springer International Publishing, 2020, pp. 116–127. isbn: 978-3-030-36687-2.
               </li>
            </ul>
            
            <h2>Write-ups</h2>
            <ul>
               <li><i><a href="/papers/weight1.pdf">Galois Representations Attached to Weight 1 Modular Forms</a></i></li>
            </ul>

            <h2>Talks</h2>
            <ul>
            <li><i>Galois Representations Attached to Weight 1 Modular Forms</i>, Student Number Theory Seminar, UC Berkeley.
                  (December 2024)
               </li>
               <li><i>A Crash Course on Shimura Varieties</i>, Cohomology of Locally Symmetric Spaces Seminar, UC
                  Berkeley.
                  (October 2024)
               </li>
               <li><i>Automorphic Vector Bundles</i>, Cohomology of Locally Symmetric Spaces Seminar, UC Berkeley.
                  (September 2024)
               </li>
               <li><i>Defining general Shimura varieties</i>, Shimura Varieties Reading Seminar, UC Berkeley.
                  February 2023)
               </li>
               <li><i>The image of inertia argument and applications to the generalized Fermat equation</i>,
                  Student Number Theory Seminar, UC Berkeley. (November 2022)
               </li>
               <li><i>Canonical heights on abelian varieties</i>, Number Theory Learning Seminar, UC Berkeley.
                  (January 2022)
               </li>
               <li><i>Modular curves and modular forms over the complex numbers</i>, Number Theory Learning Seminar,
                  UC Berkeley. (February 2021)
               </li>
            </ul>
         </PageContent>
      </PageLayout>
   )
}

export const Head = () => <Seo title="Research"/>

export default ResearchPage
