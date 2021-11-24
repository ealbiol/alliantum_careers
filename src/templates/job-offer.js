import * as React from "react"
import { graphql } from "gatsby"

// -------> Bio to be added !
// import Bio from "../components/bio"
import Layout from "../components/Layout/index"
import Seo from "../components/seo"
import { ApplyForm } from "../components/ApplyForm"
import { AllJobOffersList } from "../components/AllJobOffersList"
import { YourBenefits } from "../components/YourBenefits"


const JobOfferTemplate = ({ data, location }) => {

  const jobOffer = data.markdownRemark;


  return (
    <Layout>

      <br />
      <br />
      <br />


      <div className="container-main" >
        <Seo title={jobOffer.frontmatter.title} />

        <div className="flex" >

          <div className="w-6/12" >
            <div>

              <div className="pill" >{jobOffer.frontmatter.department}</div>

              <div className="pretitle text-loblolly-600">WORK WITH US AS</div>
              <div className="title text-md w-7/12" >{jobOffer.frontmatter.title}</div>

              <div className="pretitle text-loblolly-600" >MINIMUM EXPERIENCE</div>
              <div>{jobOffer.frontmatter.experience}</div>

              <div className="pretitle text-loblolly-600" >LANGUAGES REQUIRED</div>
              <div>{jobOffer.frontmatter.languageRequired1}</div>
              <div>{jobOffer.frontmatter.languageRequired2}</div>

            </div>

            <section className="border border-loblolly rounded-lg mb-3 p-3 overflow-hidden max-w-3xl mt-5"
              dangerouslySetInnerHTML={{ __html: jobOffer.html }}
              itemProp="articleBody"
            />

            <div>
              <div className="pretitle text-loblolly-600" >WHAT WE NEED RIGHT NOW</div>
              <div className=" max-w-3xl" >
                <AllJobOffersList />
              </div>
            </div>

          </div>

          <div className="w-6/12 flex justify-end" >
            <div className="max-w-md flex-grow fixed" >
              <ApplyForm />
            </div>
          </div>
        </div>




        <div className="z-10 relative" style={{ border: "4px solid green" }} >
          <YourBenefits />
        </div>


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
      }
    }
    
  }
`