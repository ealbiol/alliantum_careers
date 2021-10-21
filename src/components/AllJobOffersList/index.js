import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export function AllJobOffersList() {


    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                department
                description
                languageRequired1
                languageRequired2
                experience
                title
                minimumExperience
                languageRequired3
              }
              fields {
                slug
              }
            }
          }
        }
      }
  `)


    const jobOfferDetails = data.allMarkdownRemark.edges
    console.log("job offer details:--->", jobOfferDetails);


    return (
        <div  >

            {
                jobOfferDetails.map((detail, index) => {
                    return (
                        <div key={index} style={{ border: "1px solid black" }} >
                            <Link to={detail.node.fields.slug} >
                                <div>{detail.node.frontmatter.title}</div>
                                <div>{detail.node.frontmatter.department}</div>
                            </Link>
                        </div>

                    )
                })
            }

        </div>
    )
}

