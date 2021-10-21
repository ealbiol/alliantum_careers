import * as React from "react"
import { Link, graphql } from "gatsby"

// ---> Bio and Seo to be added !
// import Bio from "../components/bio"
import Layout from "../components/layout"
// import Seo from "../components/seo"
import { ApplyForm } from "../components/ApplyForm"
import { AllJobOffersList } from "../components/AllJobOffersList"

const JobOfferTemplate = ({ data, location }) => {

  const jobOffer = data.markdownRemark;


  return (
    <Layout>
      <div>

        <div>

          <div>{jobOffer.frontmatter.department}</div>

          <div>WORK WITH US AS</div>
          <h1>{jobOffer.frontmatter.title}</h1>

          <h6>MINIMUM EXPERIENCE</h6>
          <div>{jobOffer.frontmatter.experience}</div>

          <h6>LANGUAGES REQUIRED</h6>
          <div>{jobOffer.frontmatter.languageRequired1}</div>
          <div>{jobOffer.frontmatter.languageRequired2}</div>

        </div>

        <section
          dangerouslySetInnerHTML={{ __html: jobOffer.html }}
          itemProp="articleBody"
        />

        <div>
          <div>WHAT WE NEED RIGHT NOW</div>
        </div>

      </div>

      <div>
        <ApplyForm />
      </div>

      <div>
        <AllJobOffersList
        />
      </div>

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
        department
        experience
        languageRequired1
        languageRequired2
        languageRequired3
      }
    }
    
  }
`