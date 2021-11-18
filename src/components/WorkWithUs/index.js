import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { getAllEmployees } from "../../data/data"
import { EmployeesGallery } from "../EmployeesGallery";

export function WorkWithUs() {

    const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        getAllEmployees().then((result) => {
            setEmployees(result)

        })
    }, [])

    const firstLinePhotos = employees.slice(0, 8)
    console.log("firstLinePhotos:---->", firstLinePhotos);
    const secondLinePhotos = employees.slice(8, 16);
    console.log("secondLinePhotos:---->", secondLinePhotos);


    return (
        <div className="hero-header">
            <div className="hero-header__left">
                <div className="hero-left-content">

                    <div className="hero-left-content__wrapper z-10 bg-gradient-to-r from-white via-white to-transparent flex flex-col items-start justify-center h-10">
                        <span className="pretitle text-xs font-bold">We are looking for talent</span>
                        <h1 className="font-title">Want to work with us?</h1>
                        <AnchorLink className="btn btn-primary" to={"/#jobs-table"} >See open processes</AnchorLink>
                    </div>
                </div>
            </div>

            <EmployeesGallery />

        </div>
    )
}