import * as React from "react"
import EmployeePhoto from "../EmployeePhoto/index"


export function EmployeeCard({ firstName, lastName, departmentName, description, photo }) {
    return (
        <div>
            <EmployeePhoto photo={photo} />
            <div>{firstName}{" "}{lastName}</div>
            <div>{departmentName}</div>
            <div>{description}</div>
        </div>
    )
}