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

    return (
        <div className="flex relative">
            <div className="container-main z-10 h-halfscreen mt-2 bg-gradient-to-r from-white via-white to-transparent">
                <div className="text-xs font-bold">WE ARE LOOKING FOR TALENT</div>
                <h1 className="font-title">Want to work with us?</h1>
                <AnchorLink to={"/#jobs-table"} >See open processes</AnchorLink>
            </div>
            <div className="absolute">
                <div className="flex flex-wrap">
                    {
                        employees.map((employee, index) => {
                            return (
                                <EmployeePhoto className="mr-2 mb-2" key={index} photo={employee.photo} />
                            )
                        })
                    }
                </div>
                <div>Meet your future team</div>
            </div>
        </div>
    )
}