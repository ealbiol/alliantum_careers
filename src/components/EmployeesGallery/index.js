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

    const allEmployeePhotos = employees.sort(function (a, b) { return 0.5 - Math.random() })
    const firstLinePhotos = allEmployeePhotos.slice(0, 8);
    const secondLinePhotos = allEmployeePhotos.slice(8, 16);

    const doubleFirstLinePhotos = firstLinePhotos.concat(firstLinePhotos)
    const doubleSecondLinePhotos = secondLinePhotos.concat(secondLinePhotos)

    console.log("Photos FirstLine:--->", doubleFirstLinePhotos);
    console.log("Photos SecondLine:--->", doubleFirstLinePhotos);

    return (

        <div className="hero-header__back">
            <div className="hero-back-content">
                <div className="hero-faces-row mb-2" >
                    {
                        doubleFirstLinePhotos.map((employee, index) => {
                            return (
                                <div key={index} className="hero-faces-row__item absolute top-0 py-12 animate-marquee2 whitespace-nowrap" >
                                    <EmployeePhoto className="mr-2 mb-2" photo={employee.photo} firstName={employee.firstName} surname={employee.surname} />
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
                        doubleSecondLinePhotos.map((employee, index) => {
                            return (
                                <div key={index} className="hero-faces-row__item absolute top-0 py-12 animate-marquee2 whitespace-nowrap" >
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