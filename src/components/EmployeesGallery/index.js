import * as React from "react"
import EmployeePhoto from "../EmployeePhoto";
import { getAllEmployees } from "../../data/data"


export function EmployeesGallery() {

    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        getAllEmployees().then((result) => {
            setEmployees(result)

        })
    }, [])

    const firstLinePhotos = employees.slice(0, 8).sort(function (a, b) { return 0.5 - Math.random() });
    const secondLinePhotos = employees.slice(8, 17).sort(function (a, b) { return 0.5 - Math.random() });


    return (

        <div className="hero-header__back">
            <div className="hero-back-content">
                <div className="hero-faces-row mb-2" >
                    {
                        firstLinePhotos.map((employee, index) => {
                            return (
                                <div key={index} className="hero-faces-row__item" >
                                    <EmployeePhoto className="mr-2 mb-2" photo={employee.photo} />
                                    <div className="hero-item-info" >
                                        <span className="block" >{employee.firstName}</span>
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
                                <div key={index} className="hero-faces-row__item" >
                                    <EmployeePhoto className="mr-2 mb-2" photo={employee.photo} />
                                    <div className="hero-item-info" >
                                        <span className="block" >{employee.firstName}</span>
                                        <span className="block" >{employee.departmentName}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}