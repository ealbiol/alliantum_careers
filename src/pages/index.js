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


      <div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/page-3/">Go to page 3</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div>

      <AllJobOffersList />

      <div style={{ border: "1px solid green" }} >
        <div>YOUR BENEFITS</div>
        <div>
          Work in an international company,
          with a happy team, in a great office
        </div>
        <div id="your-benefits" >
          <YourBenefits />
        </div>
      </div>

      <div id="the-offices" >
        World Map with Office Cards
        <WorldMap />
      </div>

      {
        employees.map((employee, index) => {
          return (
            <div key={index} >{employee.firstName}</div>
          )
        })
      }

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
      <div id="jobs-table">
        <div >Space for Jobs Table List with Anchor</div>
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



    </Layout>
  )

}

export default IndexPage
