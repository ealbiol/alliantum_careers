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
import { SwitchModeButton } from "../components/SwitchModeButton"


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


      <Seo title="Home" />


      <SwitchModeButton />

      {/* ------------> Work With Us */}
      <div id="jobs-table" className="bg-persian-pink dark:bg-festival">
        <WorkWithUs />
      </div>

      {/* ------------> Job Offers Table */}
      <div id="jobs-table">
        <h2>We do Business Digitalisation and New-era Marketing</h2>
        <AllJobOffersList />
      </div>

      {/* ------------> Your Benefits */}
      <div >
        <h2>Work in an international company, with a happy team, in a great office</h2>
        <div id="your-benefits" >
          <YourBenefits />
        </div>
      </div>

      {/* ------------> Office Presentation */}
      <div>
        <h2>Your future office is modern, bright and equipped with the latest technological equipment</h2>
        <OfficePhotos />
      </div>

      {/* ------------> World Map */}
      <div id="the-offices" >
        <h5>THE OFFICE</h5>
        <h3>German spirit. Spanish passion.</h3>
        <GoogleMaps />
      </div>

      <TheTeam />

      <div className="bg-cornflower-blue">
        <AstronautSection />
      </div>

      {/* ------------> Our Values */}
      <div id="our-values" >
        <OurValuesSection />
      </div>

    </Layout>
  )

}

export default IndexPage
