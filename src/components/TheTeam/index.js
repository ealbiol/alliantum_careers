import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { EmployeesGallery } from "../EmployeesGallery";

export function TheTeam() {


    return (
        <div>
            {/* ------------> The Team 
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
                <span className="title text-lg text-center leading-3 mt-6">Don’t they<br /><br />look happy?</span>
            </div>
            */}

            <div className="blurred-gradient-wrapper">
                <div className="blurred-gradient-container">
                    <div className="blurred-gradient-content flex-col">
                        <div className="w-100 relative z-10">
                            <div className="employeesGallery-offset" >
                                <div className="trianglesWrapper">
                                    <div className="triangle triangle-xl triangleColor-general-1"
                                        style={{
                                            top: 200,
                                            left: "-12%",
                                            transform: "rotate(60deg)",
                                            animationDuration: "38s"
                                        }}>
                                    </div>
                                    <div className="triangle triangle-lg triangleColor-general-2"
                                        style={{
                                            top: 600,
                                            right: "0%",
                                            transform: "rotate(90deg)",
                                            animationDuration: "42s"
                                        }}>
                                    </div>
                                    <div className="triangle triangle-md triangleColor-general-3"
                                        style={{
                                            top: 800,
                                            left: "40%",
                                            transform: "rotate(20deg)",
                                            animationDuration: "50s"
                                        }}>
                                    </div>
                                </div>
                                <EmployeesGallery />
                            </div>
                        </div>
                        <div className="container-main" >
                            <div className="card-bg bg-white md:w-px-420 mx-auto lg:-mt-7 mb-6 relative z-10">
                                <span className="title text-black text-md block">Do you want to grow with us?</span>
                                <AnchorLink className="btn bg-purple btn-full text-center text-white mt-4" to={"/#jobs-table"} >See current job offers</AnchorLink>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}