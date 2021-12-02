import * as React from "react"

export function DepartmentsMenu({ allDepartments, clickedDep, setClickedDep }) {


    function filterDepartment(department) {
        setClickedDep(department)
    }

    const allDepsWithoutManagement = allDepartments.filter(department => department !== "Management")


    return (
        <div className="flex flex-wrap">


            {
                allDepsWithoutManagement.map((department, index) => {

                    return (
                        <button
                            style={{
                                backgroundColor: department === clickedDep ? "#141414" : "",
                                color: department === clickedDep ? "white" : ""
                            }}
                            className="text-xs py-1 px-3 border border-black dark:border-white rounded-xl mr-1 mb-2"
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