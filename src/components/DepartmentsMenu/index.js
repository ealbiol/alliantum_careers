import * as React from "react"

export function DepartmentsMenu({ allDepartments, clickedDep, setClickedDep }) {


    function filterDepartment(department) {
        setClickedDep(department)
    }

    console.log("allDepartments:--->", allDepartments);
    const allDepsWithoutManagement = allDepartments.filter(department => department !== "Management")


    return (
        <div className="flex">

            {
                allDepsWithoutManagement.map((department, index) => {

                    return (
                        <button
                            style={{
                                backgroundColor: department === clickedDep ? "#D7DCE1" : "",
                                color: department === clickedDep ? "black" : ""
                            }}
                            className="text-xs py-1 px-3 border border-loblolly rounded-xl mr-1"
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