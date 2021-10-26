import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/seo"
import { getAllEmployees } from "../data/data"
import { useStaticQuery, graphql } from "gatsby"
import { AllJobOffersList } from "../components/AllJobOffersList/index"
import { YourBenefits } from "../components/YourBenefits/index"
import { GoogleMaps } from "../components/GoogleMaps"
import { OfficePhotos } from "../components/OfficePhotos"
import { AstronautSection } from "../components/AstronautSection"

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

      {/* ------------> Job Offers Table */}
      <div id="jobs-table" style={{ border: "4px solid rebeccapurple" }}>
        <h2>We do Business Digitalisation and New-era Marketing</h2>
        <AllJobOffersList />
      </div>

      {/* ------------> Your Benefits */}
      <div style={{ border: "4px solid gray" }} >
        <h2>Work in an international company, with a happy team, in a great office</h2>
        <div id="your-benefits" >
          <YourBenefits />
        </div>
      </div>

      {/* ------------> Office Presentation */}
      <div style={{ border: "4px solid rebeccapurple" }} >
        <h2>Your future office is modern, bright and equipped with the latest technological equipment</h2>
        <OfficePhotos />
      </div>

      {/* ------------> World Map */}
      <div id="the-offices" style={{ border: "4px solid gray" }} >
        <h5>THE OFFICE</h5>
        <h3>German spirit. Spanish passion.</h3>
        <GoogleMaps />
      </div>

      <AstronautSection />

      {/* <div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/page-3/">Go to page 3</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div> */}

      {/* {
        employees.map((employee, index) => {
          return (
            <div key={index} >{employee.firstName}</div>
          )
        })
      } */}

    </Layout>
  )

}

export default IndexPage
