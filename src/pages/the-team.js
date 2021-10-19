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

    const departmentsUnique = new Set(departmentsPerEmployee); //Removing repeated departments.

    const departmentsUniqueArray = Array.from(departmentsUnique); //Parsing from Set to Array.
    console.log("Departments Unique: --->", departmentsUniqueArray);



    return (
        <Layout>

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
            <h2>Departments:</h2>
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
                    const employeesPerDepartment = employees.filter(employee => employee.departmentName === department)
                    console.log("Employees per department: --->", department, employeesPerDepartment);



                    return (
                        <div key={index} >
                            <h1>{department}</h1>
                            {
                                employeesPerDepartment.map((employeeDepUnite, index) => {
                                    return (
                                        <div key={index} >
                                            <EmployeePhoto
                                                photo={employeeDepUnite.photo}
                                            />
                                            <div>{employeeDepUnite.firstName}{" "}{employeeDepUnite.surname}</div>
                                            <div>{employeeDepUnite.departmentName}</div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    )


                })
            }



        </Layout>
    )
}

