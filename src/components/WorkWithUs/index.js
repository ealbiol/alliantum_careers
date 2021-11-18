import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import EmployeePhoto from "../EmployeePhoto";
import { getAllEmployees } from "../../data/data"


export function WorkWithUs() {

    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        getAllEmployees().then((result) => {
            setEmployees(result)

        })
    }, [])

    const firstLinePhotos = employees.slice(0, 8)
    console.log("firstLinePhotos:---->", firstLinePhotos);
    const secondLinePhotos = employees.slice(8, 17);
    console.log("secondLinePhotos:---->", secondLinePhotos);


    return (
        <div className="flex relative mb-6">
            <div className="container-main z-10 bg-gradient-to-r from-white via-white to-transparent flex flex-col items-start justify-center h-10">
                <span className="pretitle text-xs font-bold">We are looking for talent</span>
                <h1 className="font-title">Want to work with us?</h1>
                <AnchorLink className="btn btn-primary" to={"/#jobs-table"} >See open processes</AnchorLink>
            </div>
            {/* <div> */}
            <div className="absolute">

                <div  >
                    {
                        firstLinePhotos.map((employee, index) => {
                            return (
                                <div>
                                    <EmployeePhoto className="mr-2 mb-2" key={index} photo={employee.photo} />
                                    <div>{employee.firstName}</div>
                                    <div>{employee.surname}</div>
                                    <div>{employee.departmentName}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        secondLinePhotos.map((employee, index) => {
                            return (
                                <div>
                                    <EmployeePhoto className="mr-2 mb-2" key={index} photo={employee.photo} />
                                    <div>{employee.firstName}</div>
                                    <div>{employee.surname}</div>
                                    <div>{employee.departmentName}</div>
                                </div>

                            )
                        })
                    }
                </div>


                <AnchorLink to={"/the-team"} >Meet your future team</AnchorLink>
            </div>
        </div>
    )
}