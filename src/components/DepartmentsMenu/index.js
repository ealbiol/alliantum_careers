import * as React from "react"

export function DepartmentsMenu({ allDepartments }) {
    return (
        <div>
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