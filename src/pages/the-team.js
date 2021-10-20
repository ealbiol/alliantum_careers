import * as React from "react"
import Layout from "../components/Layout/index"
import { getAllEmployees } from "../data/data"
import { useStaticQuery, graphql } from "gatsby"
import { EmployeeCard } from "../components/EmployeeCard"
import { DepartmentWithEmployees } from "../components/DepartmentWithEmployees"


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

    const departmentsUnique = new Set(departmentsPerEmployee); //Removing repeated departments.

    const departmentsUniqueArray = Array.from(departmentsUnique); //Parsing from Set to Array.



    return (
        <Layout titlePage={data.site.siteMetadata?.theTeam} >

            {/* {
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
            } */}

            {/* /////////// */}

            {/* {
                employees.map((employee, index) => {

                    return (
                        <div key={index} >
                            <EmployeePhoto
                                photo={employee.photo}
                            />
                            <div>{employee.firstName}{" "}{employee.surname}</div>
                            <div>{employee.departmentName}</div>
                            <div>{employee.description}</div>

                        </div>
                    )
                })
            } */}

            {/* /////////// */}

            {/* {
                departmentsUniqueArray.map((department, index) => {

                    return (
                        <div key={index} >
                            <div>{department}</div>
                        </div>
                    )
                })
            } */}



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

