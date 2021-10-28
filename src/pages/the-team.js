import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/seo"
import { getAllEmployees } from "../data/data"
import { useStaticQuery, graphql } from "gatsby"
import { DepartmentWithEmployees } from "../components/DepartmentWithEmployees"
import { DepartmentsMenu } from "../components/DepartmentsMenu/index"
import { GetAllDepartments } from "../data/data"

console.log("All Employees:--->", getAllEmployees());


export default function TheTeam() {

    const data = useStaticQuery(graphql`
    query {
        site {
          ...metadata
        }
      }
          
  `)


    return (
        <Layout titlePage={data.site.siteMetadata?.theTeam} >

            <Seo title="The Team" />

            <DepartmentsMenu allDepartments={GetAllDepartments()} />

            {
                GetAllDepartments().map((department, index) => {

                    return (
                        <div key={index} >

                            <DepartmentWithEmployees
                                departmentTitle={department}
                            />

                        </div>

                    )

                })
            }

        </Layout>
    )
}

