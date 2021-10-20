import * as React from "react"
import Layout from "../components/Layout/index"
import { getAllEmployees } from "../data/data"
import { useStaticQuery, graphql } from "gatsby"
import { DepartmentWithEmployees } from "../components/DepartmentWithEmployees"
import { DepartmentsMenu } from "../components/DepartmentsMenu/index"

console.log("All Employees:--->", getAllEmployees());


export default function TheTeam() {

    const data = useStaticQuery(graphql`
    query {
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


    const departmentsPerEmployee = employees.map(employee => employee.departmentName)

    const departmentsUnique = new Set(departmentsPerEmployee);

    const departmentsUniqueArray = Array.from(departmentsUnique);

    console.log("AAA", departmentsUniqueArray);


    return (
        <Layout titlePage={data.site.siteMetadata?.theTeam} >

            <DepartmentsMenu allDepartments={departmentsUniqueArray} />

            {
                departmentsUniqueArray.map((department, index) => {

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

