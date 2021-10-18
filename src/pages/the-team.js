import * as React from "react"
import Layout from "../components/layout"
import { getAllEmployees } from "../data/data"
import { useStaticQuery, graphql } from "gatsby"
import EmployeePhoto from "../components/EmployeePhoto/index"

console.log(getAllEmployees());


export default function TheTeam() {

    const data = useStaticQuery(graphql`
    query {
            allImageSharp {
              nodes {
                fixed {
                  originalName
                }
                gatsbyImageData
              }
            }
          }
          
  `)
    console.log("Data:", data);
    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        getAllEmployees().then((result) => {
            setEmployees(result)

        })
    }, [])

    console.log("Employees--->", getAllEmployees());

    const employeesIT = employees.filter(employee => employee.departmentName === "IT")

    return (
        <Layout>

            {
                employeesIT.map((employee, index) => {

                    return (
                        <div key={index} >
                            <div>{employee.firstName}{" "}{employee.surname}</div>
                            <div>{employee.departmentName}</div>
                            <div>{employee.description}</div>
                            <EmployeePhoto
                                photo={employee.photo}
                            />
                        </div>
                    )
                })
            }

        </Layout>
    )
}

