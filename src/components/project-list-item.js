import * as React from 'react'
import {
   container,
   imgWrapper,
   titleWrapper,
} from './project-list-item.module.css'
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const ProjectListItem = ({ node, subdirectory }) => {
   const image = getImage(node.frontmatter.hero_image);
   return (
      <div className={container}>
         <div className={imgWrapper}>
            <GatsbyImage
               alt={node.frontmatter.hero_image_alt}
               image={image}
               style={{borderRadius: "50%", border: "1px solid black"}}
            />
         </div>
         <div className={titleWrapper}>
            <h2>
               <Link to={`/${subdirectory}/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
               </Link>
            </h2>
         </div>
      </div>
   );
}

export default ProjectListItem