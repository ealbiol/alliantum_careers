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
    const secondLinePhotos = employees.slice(9, 17);
    console.log("secondLinePhotos:---->", secondLinePhotos);


    return (
        <div className="flex relative mb-6">
            <div className="container-main z-10 bg-gradient-to-r from-white via-white to-transparent flex flex-col items-start justify-center h-10">
                <span className="pretitle text-xs font-bold">We are looking for talent</span>
                <h1 className="font-title">Want to work with us?</h1>
                <AnchorLink className="btn btn-primary" to={"/#jobs-table"} >See open processes</AnchorLink>
            </div>
            <div className="absolute">
                {
                    firstLinePhotos.map((employee, index) => {
                        return (
                            <EmployeePhoto className="mr-2 mb-2" key={index} photo={employee.photo} />
                        )
                    })
                }
                {
                    secondLinePhotos.map((employee, index) => {
                        return (
                            <EmployeePhoto className="mr-2 mb-2" key={index} photo={employee.photo} />
                        )
                    })
                }

                <AnchorLink to={"/the-team"} >Meet your future team</AnchorLink>
            </div>
        </div>
    )
}