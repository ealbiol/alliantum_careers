import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function EmployeePhoto({ photo, firstName, surname }) {

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

  const altEmployeeName = photo.replace(/([A-Z])/g, ' $1').trim().replace(".jpg", "")


  // console.log(firstName, surname);




  return (
    <GatsbyImage loading="lazy" className="rounded-lg" style={{ transform: "scale(1.01)" }} image={getImage(photoEmployee)} alt={altEmployeeName} />
  )
}
