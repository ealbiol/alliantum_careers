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
    // const jobOfferSlug = data.allMarkdownRemark.edges
    // console.log("job offer details: ---> ", jobOfferDetails);
    // console.log("job offer slugs: --->", jobOfferSlug);
    console.log("job offer details:--->", jobOfferDetails);


    return (
        <div>
            {/* {

                jobOfferSlug.map((slugUnite, index) => {
                    return (
                        <div key={index}>
                            {
                                jobOfferDetails.map((detail, index) => {
                                    return (
                                        <Link key={index} to={slugUnite.node.fields.slug}>
                                            <div key={index} >
                                                <div>{detail.frontmatter.title}</div>
                                                <div>{detail.frontmatter.department}</div>
                                            </div>
                                        </Link>

                                    )
                                })
                            }
                        </div>
                    )
                })


            } */}

            {
                jobOfferDetails.map((detail, index) => {
                    return (
                        <Link key={index} to={detail.node.fields.slug} >
                            <div>{detail.node.frontmatter.title}</div>
                            <div>{detail.node.frontmatter.department}</div>
                        </Link>
                    )
                })
            }

        </div>
    )
}

