import * as React from "react"

export function DepartmentsMenu({ allDepartments }) {
    return (
        <div>
            <h3>Departments</h3>
            {
                allDepartments.map((department, index) => {
                    return (
                        <span key={index}>{department}{" "}</span>
                    )
                })
            }
        </div>
    )
}