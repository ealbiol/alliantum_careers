import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function EmployeePhoto({ photo }) {

  const data = useStaticQuery(graphql`
    query {
            allImageSharp {
              nodes {
                fixed {
                  originalName
                }
                gatsbyImageData(width: 150)
              }
            }
          }
          
  `)

  const photoEmployee = data.allImageSharp.nodes.find(image => photo === image.fixed.originalName);


  return (

    <GatsbyImage image={getImage(photoEmployee)} alt="Photo" />

  )
}
