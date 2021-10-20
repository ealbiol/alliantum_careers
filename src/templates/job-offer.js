import * as React from "react"
import { Link, graphql } from "gatsby"

// ---> Bio and Seo to be added !
// import Bio from "../components/bio"
import Layout from "../components/layout"
// import Seo from "../components/seo"

const JobOfferTemplate = ({ data, location }) => {
    const jobOffer = data.markdownRemark;

    return (
        <Layout>
            <div>Job Offer!</div>
            <h1>{jobOffer.frontmatter.title}</h1>

            <section
                dangerouslySetInnerHTML={{ __html: jobOffer.html }}
                itemProp="articleBody"
            />
        </Layout>
    )
}

export default JobOfferTemplate

export const pageQuery = graphql`
  query JobOffersBySlug(
    $id: String!

  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    
  }
`