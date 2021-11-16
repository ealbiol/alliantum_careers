import * as React from "react"

export function DepartmentsMenu({ allDepartments, clickedDep, setClickedDep }) {


    function filterDepartment(department) {
        setClickedDep(department)
    }

    return (
        <div className="flex">

            {
                allDepartments.map((department, index) => {

                    return (
                        <button
                            style={{ backgroundColor: department === clickedDep ? "gray" : "" }}
                            className="text-xs py-1 px-3 border border-loblolly-600 rounded-xl mr-1"
                            onClick={() => filterDepartment(department)}
                            key={index} >
                            {department}
                        </button>
                    )
                })
            }


        </div>
    )
}