import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index"
import Seo from "../components/seo"
import { getAllEmployees } from "../data/data"
import { useStaticQuery, graphql } from "gatsby"
import { AllJobOffersList } from "../components/AllJobOffersList/index"
import { YourBenefits } from "../components/YourBenefits/index"
import { WorldMap } from "../components/WorldMap"

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

      {/* <div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/page-3/">Go to page 3</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div> */}

      {/* ---> Job Offers Table */}
      <div id="jobs-table" style={{ border: "4px solid rebeccapurple" }}>
        <div>
          We do Business Digitalisation
          and New-era Marketing
        </div>
        <AllJobOffersList />
      </div>

      {/* ---> Your Benefits */}
      <div style={{ border: "4px solid gray" }} >
        <div>
          Work in an international company,
          with a happy team, in a great office
        </div>
        <div id="your-benefits" >
          <YourBenefits />
        </div>
      </div>

      {/* ---> World Map */}
      <div id="the-offices" style={{ border: "4px solid rebeccapurple" }} >
        <WorldMap />
      </div>

      {/* {
        employees.map((employee, index) => {
          return (
            <div key={index} >{employee.firstName}</div>
          )
        })
      } */}

      {/* ---> Office Presentation */}
      <div>
        <div>
          Your future office is modern,
          bright and equipped with the latest
          technological equipment
        </div>
      </div>

      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>



    </Layout>
  )

}

export default IndexPage
