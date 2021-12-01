import * as React from "react"
import { getAllEmployees } from "../../data/data"
import { EmployeeCard } from "../EmployeeCard/index"

export function DepartmentWithEmployees({ departmentTitle }) {


    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        getAllEmployees().then((allEmployees) => {
            const employeesPerDepartment = allEmployees.filter(employee => employee.departmentName === departmentTitle)
            setEmployees(employeesPerDepartment)

        })
    }, [departmentTitle])





    return (
        <div>
            <h1>{departmentTitle}</h1>
            {
                employees.map((employeeDepUnite, index) => {
                    return (
                        <div key={index} >

                            <EmployeeCard
                                photo={employeeDepUnite.photo}
                                firstName={employeeDepUnite.firstName}
                                lastName={employeeDepUnite.surname}
                                departmentName={employeeDepUnite.departmentName}
                                description={employeeDepUnite.description}
                            />

                        </div>
                    )
                })
            }
        </div>
    )
}