import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/seo"
import { getAllEmployees } from "../data/data"
import { useStaticQuery, graphql } from "gatsby"
import { AllJobOffersList } from "../components/AllJobOffersList/index"
import { YourBenefits } from "../components/YourBenefits/index"
import { GoogleMaps } from "../components/GoogleMaps"
import { OfficePhotos } from "../components/OfficePhotosSection"
import { AstronautSection } from "../components/AstronautSection"
import { TheTeam } from "../components/TheTeam"
import { OurValuesSection } from "../components/OurValuesSection"
import { WorkWithUs } from "../components/WorkWithUs"


export function IndexPage() {

  const data = useStaticQuery(graphql`
  query {
      allImageSharp {
          nodes{
              ...employeesPhotos
          }
      }
      site {
        ...metadata
      }
    }
        
`)

  const [employees, setEmployees] = React.useState([])

  React.useEffect(() => {
    getAllEmployees().then((result) => {
      setEmployees(result)

    })
  }, [])


  return (
    <Layout titlePage={data.site.siteMetadata?.mainPage} >

      <div>
        <Seo title="Home" />

        {/* ------------> Work With Us */}
        <div className="overflow-hidden">
          <WorkWithUs />
        </div>

        {/* ------------> Job Offers Table */}
        <div id="jobs-table" className="w-full lg:w-container-sm mx-auto">
          <span className="pretitle">What we need right now</span>
          <h3 className="title text-md w-7/12">We do Business Digitalisation and New-era Marketing</h3>
          <AllJobOffersList />
        </div>

        {/* ------------> Your Benefits */}
        <div className="container mx-auto my-6">
          <span className="pretitle">Your benefits</span>
          <h3 className="title text-md w-6/12">Work in an international company, with a happy team, in a great office</h3>
          <div id="your-benefits">
            <YourBenefits />
          </div>
        </div>

        {/* ------------> Office Presentation */}
        <div>
          <div className="container mx-auto mt-6 mb-2">
            <h3 className="title text-md w-6/12">Your future office is modern, bright and equipped with the latest technological equipment</h3>
          </div>
          <OfficePhotos />
        </div>

        {/* ------------> World Map */}
        <div id="the-offices">
          <div className="container mx-auto mt-6 mb-2">
            <span className="pretitle">The office</span>
            <h3 className="title text-md w-6/12">German spirit. Spanish passion.</h3>
          </div>
          <GoogleMaps />
        </div>

        <div>
          <div className="container mx-auto mt-6 mb-2">
            <span class="pretitle">The team</span>
            <h3 className="title text-md w-6/12">We are characterised by our strong team structure and working environment</h3>
          </div>
          <TheTeam />
        </div>

        <div className="bg-cornflower-blue">
          <AstronautSection />
        </div>

        {/* ------------> Our Values */}
        <div id="our-values" >
          <OurValuesSection />
        </div>
      </div>

    </Layout>
  )

}

export default IndexPage
