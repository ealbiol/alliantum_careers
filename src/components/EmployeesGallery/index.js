import * as React from "react"
import EmployeePhoto from "../EmployeePhoto";
import { getAllEmployees, getAllEmployeesLength } from "../../data/data"


export function EmployeesGallery() {

    const [employees, setEmployees] = React.useState([])
    const [allEmployeesLength, setAllEmployeesLength] = React.useState([])

    React.useEffect(() => {
        getAllEmployees().then((result) => {
            setEmployees(result)
        })

        getAllEmployeesLength().then((result) => {
            setAllEmployeesLength(result)
        })
    }, [])


    const firstHalfEmployees = Math.floor(allEmployeesLength / 2)
    const secondHalfEmployees = firstHalfEmployees * 2

    const allEmployeePhotos = employees.sort(function (a, b) { return 0.5 - Math.random() })
    const firstLinePhotos = allEmployeePhotos.slice(0, firstHalfEmployees);
    const secondLinePhotos = allEmployeePhotos.slice(firstHalfEmployees, secondHalfEmployees);

    // const doubleFirstLinePhotos = firstLinePhotos.concat(firstLinePhotos)
    // const doubleSecondLinePhotos = secondLinePhotos.concat(secondLinePhotos)



    return (

        <div className="hero-header__back pt-6 lg:pt-0">
            <div className="hero-back-content">
                <div className="hero-faces-row mb-2" >
                    {
                        firstLinePhotos.map((employee, index) => {
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
                        secondLinePhotos.map((employee, index) => {
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