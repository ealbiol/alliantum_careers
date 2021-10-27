import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import EmployeePhoto from "../EmployeePhoto/index"
import { getAllEmployees } from "../../data/data"


export function TheTeam() {

    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        getAllEmployees().then((result) => {
            setEmployees(result)

        })
    }, [])

    return (
        <div>
            <div>
                <div>THE TEAM</div>
                <div>We are characterised by our strong team structure and working environment</div>
                <AnchorLink to="/the-team" >Meet the team</AnchorLink>
            </div>

            <div>
                <div>VIDEO</div>
                <div>
                    <div>An employee-oriented company where you can enjoy a fun and informal atmosphere, while keep growing as the best professional in your area.</div>
                    <div>Specialised in Digital Marketing and the implementation of Business Software Systems. We like to keep learning and always be up to date, which is why the development and careers of our employees are a priority for us.
                        <div>
                            If you are interested in working in a dynamic company
                            If you like multinational and young environments
                            If you are proactive
                            If you want to keep learning
                        </div>
                    </div>
                </div>
            </div>

            <h1>Don’t they look happy?</h1>

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
                <div style={{ backgroundColor: "#FCE569" }} >
                    <div>You could be one of them</div>
                    <AnchorLink to="/#jobs-table" >See open processes</AnchorLink>
                </div>
            </div>

        </div>
    )
}