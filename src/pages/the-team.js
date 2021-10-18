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
    const departmentsPerEmployee = employees.map(employee => employee.departmentName)

    const departmentsUnique = new Set(departmentsPerEmployee);

    const departmentsUniqueArray = Array.from(departmentsUnique);
    console.log("Departments Unique: --->", departmentsUniqueArray);

    const array1 = [1, 2, 3]
    console.log(array1);

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

            {
                departmentsUniqueArray.map((department, index) => {

                    return (
                        <div key={index} >
                            <div>{department}</div>
                        </div>
                    )
                })
            }



        </Layout>
    )
}

