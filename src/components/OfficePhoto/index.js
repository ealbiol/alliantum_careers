import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export function OfficePhoto({ officePhoto }) {

  const data = useStaticQuery(graphql`
    query {
            allImageSharp {
              nodes {
                fixed {
                  originalName
                }
                gatsbyImageData(width: 350)
              }
            }
          }
          
  `)

  const photoOffice = data.allImageSharp.nodes.find(image => officePhoto.photo === image.fixed.originalName);

  return (
    <GatsbyImage image={getImage(photoOffice)} alt="Photo Office" />
  )
}