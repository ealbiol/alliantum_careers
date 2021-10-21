import * as React from "react"

export function DepartmentsMenu({ allDepartments, clickedDep, setClickedDep }) {

    function filterDepartment(department) {
        setClickedDep(department)
    }

    return (
        <div>
            {
                allDepartments.map((department, index) => {
                    return (
                        <span onClick={() => filterDepartment(department)} key={index}>{department}{" "}</span>
                    )
                })
            }
        </div>
    )
}