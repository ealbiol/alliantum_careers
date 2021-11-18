import * as React from "react"
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
                gatsbyImageData(width: 0)
              }
            }
          }
          
  `)

  const photoEmployee = data.allImageSharp.nodes.find(image => photo === image.fixed.originalName);

  return (
    <GatsbyImage className="rounded-md w-px-230 mr-2 mb-2" image={getImage(photoEmployee)} alt="Photo Employee" />

  )
}
