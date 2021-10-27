import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export function ValuePhoto({ allOurValues }) {

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

    const photoValue = data.allImageSharp.nodes.find(image => allOurValues.photo === image.fixed.originalName);


    return (
        <div>Value Photo</div>
    )
}