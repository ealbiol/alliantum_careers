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

  const jobDepartment = jobOffer.frontmatter.department
  console.log("jobDepartment:--->", jobDepartment);


  return (
    <Layout>

      <br />
      <br />
      <br />


      <div className="container-main" >
        <Seo title={jobOffer.frontmatter.title} />

        <div className="flex" >

          <div className="w-7/12"  >
            <div >

              <div className="flex mb-6" >
                <div className="pill" >{jobOffer.frontmatter.department}</div>
              </div>

              <div className="pretitle text-loblolly-600" >WORK WITH US AS</div>
              <div className="title text-md w-7/12 mt-1" >{jobOffer.frontmatter.title}</div>

              <div className="flex mt-7" >
                <div className="flex-grow" >
                  <div className="pretitle text-loblolly-600" >MINIMUM EXPERIENCE</div>
                  <div>{jobOffer.frontmatter.experience}</div>
                </div>
                <div className="flex-grow " >
                  <div className="pretitle text-loblolly-600" >LANGUAGES REQUIRED</div>
                  <div>{jobOffer.frontmatter.languageRequired1}</div>
                  <div>{jobOffer.frontmatter.languageRequired2}</div>
                </div>

              </div>


            </div>

            <section className="border border-loblolly rounded-lg mb-3 p-3 overflow-hidden max-w-3xl mt-5 w-12/12 mb-7"
              dangerouslySetInnerHTML={{ __html: jobOffer.html }}
              itemProp="articleBody"
            />

            <div className="mb-7" >
              <div className="pretitle text-loblolly-600" >WHAT WE NEED RIGHT NOW</div>
              <div>
                <AllJobOffersList />
              </div>
            </div>

          </div>

          <div className="w-7/12 flex justify-end mt-7"  >
            <div className="max-w-md flex-grow fixed " >
              <ApplyForm jobDepartment={jobDepartment} />
            </div>
          </div>
        </div>


      </div>

      <div className="z-10 relative bg-festival" >
        <YourBenefits />
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