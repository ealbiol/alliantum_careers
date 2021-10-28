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
        <div>
            <div>
                <div>WE ARE LOOKING FOR TALENT</div>
                <h1>Want to work with us?</h1>
                <AnchorLink to={"/#jobs-table"} >See open processes</AnchorLink>
            </div>
            <div>
                <div>
                    {
                        employees.map((employee, index) => {
                            return (
                                <EmployeePhoto key={index} photo={employee.photo} />
                            )
                        })
                    }
                </div>
                <div>Meet your future team</div>
            </div>
        </div>
    )
}