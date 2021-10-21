import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export function AllJobOffersList() {


    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
              department
            }
          }
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
  `)


    const jobOfferDetails = data.allMarkdownRemark.nodes
    const jobOfferSlug = data.allMarkdownRemark.edges
    console.log("job offer details: ---> ", jobOfferDetails);
    console.log("job offer slugs: --->", jobOfferSlug);


    return (
        <div>
            {
                jobOfferDetails.map((detail, index) => {
                    return (
                        <Link
                        // to={
                        //     jobOfferSlug.map(slugUnite => slugUnite.node.fields.slug)
                        // }
                        >
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
}

