import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export function ValuePhoto({ value }) {

  const data = useStaticQuery(graphql`
    query {
            allImageSharp {
              nodes {
                fixed {
                  originalName
                }
                gatsbyImageData(width: 480)
              }
            }
          }
          
  `)

  const photoValue = data.allImageSharp.nodes.find(image => value.photo === image.fixed.originalName);



  return (
    <GatsbyImage className="w-full rounded-lg overflow-hidden" image={getImage(photoValue)} alt="Photo Office" />
  )
}