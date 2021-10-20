import * as React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
// import Seo from "../components/seo"

const JobOfferTemplate = ({ data, location }) => {
    const jobOffer = data.markdownRemark;

    return (
        <Layout>
            <div>Job Offer!</div>
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