import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { EmployeesGallery } from "../EmployeesGallery";
import useTheme from "../../hooks/useTheme";

export function WorkWithUs() {
    const theme = useTheme();




    return (
        <div className="hero-header">
            <div className="hero-header__left">
                <div className="hero-left-content">
                    {theme === "dark" ?
                        <div className="hero-left-content__wrapper-black z-10 bg-gradient-to-r from-white via-white to-transparent flex flex-col items-start justify-center h-10 dark:bg-gradient-to-r dark:from-black dark:via-black dark:to-transparent">
                            <span className="pretitle text-xs font-bold text-cornflower-blue z-10">We are looking for talent</span>
                            <h1 className="font-title text-lg z-10">Want to work<br />with us?</h1>
                            <AnchorLink className="btn btn-primary z-10" to={"/#jobs-table"} >See open processes</AnchorLink>
                        </div>
                        :
                        <div className="hero-left-content__wrapper z-10 bg-gradient-to-r from-white via-white to-transparent flex flex-col items-start justify-center h-10 dark:bg-gradient-to-r dark:from-black dark:via-black dark:to-transparent">
                            <span className="pretitle text-xs font-bold text-cornflower-blue z-10">We are looking for talent</span>
                            <h1 className="font-title text-lg z-10">Want to work<br />with us?</h1>
                            <AnchorLink className="btn btn-primary z-10" to={"/#jobs-table"} >See open processes</AnchorLink>
                        </div>
                    }

                </div>
            </div>

            <EmployeesGallery />
        </div>
    )
}