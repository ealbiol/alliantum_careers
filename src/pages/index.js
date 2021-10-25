import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index"
import Seo from "../components/seo"
import { getAllEmployees } from "../data/data"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

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


      <p>
        <Link to="/the-team/">The Team</Link> <br />
        <Link to="/page-3/">Go to page 3</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
      {
        employees.map((employee, index) => {
          return (
            <div key={index} >{employee.firstName}</div>
          )
        })
      }

      <div id="section1" >B</div>
      <Link to="#section2" >GoTo</Link>
      <div>A</div>
      <div>A</div>
      <div>A</div>

      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div id="jobsTableList">
        <div >Space for Jobs Table List</div>
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
