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

    const firstLinePhotos = employees.slice(0, 8)
    const secondLinePhotos = employees.slice(8, 16);

    return (
        <div>
            <div>
                <AnchorLink to="/the-team" >Meet the team</AnchorLink>
            </div>
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-6/12">(Space for VIDEO)</div>
                    <div className="w-6/12">
                        <h4 className="text-sm">An employee-oriented company where you can enjoy a fun and informal atmosphere, while keep growing as the best professional in your area.</h4>
                        <div><p>Specialised in Digital Marketing and the implementation of Business Software Systems. We like to keep learning and always be up to date, which is why the development and careers of our employees are a priority for us.</p>
                            <ul className="list mt-3">
                                <li>If you are interested in working in a dynamic company</li>
                                <li>If you like multinational and young environments</li>
                                <li>If you are proactive</li>
                                <li>If you want to keep learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <span className="title text-xl text-center">Don’t they<br />look happy?</span>
            </div>



            <div className="hero-header__back">
                <div className="hero-back-content">
                    <div className="hero-faces-row mb-2" >
                        {
                            firstLinePhotos.map((employee, index) => {
                                return (
                                    <div className="hero-faces-row__item" >
                                        <EmployeePhoto className="mr-2 mb-2" key={index} photo={employee.photo} />
                                        <div className="hero-item-info" >
                                            <span className="block" >{employee.firstName}{" "}{employee.surname}</span>
                                            <span className="block" >{employee.departmentName}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="hero-faces-row mb-2" >
                        {
                            secondLinePhotos.map((employee, index) => {
                                return (
                                    <div className="hero-faces-row__item" >
                                        <EmployeePhoto className="mr-2 mb-2" key={index} photo={employee.photo} />
                                        <div className="hero-item-info" >
                                            <span className="block" >{employee.firstName}{" "}{employee.surname}</span>
                                            <span className="block" >{employee.departmentName}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}