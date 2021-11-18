import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { EmployeesGallery } from "../EmployeesGallery";

export function TheTeam() {


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
                <span className="title text-lg text-center leading-3 mt-6">Don’t they<br /><br />look happy?</span>
            </div>

            <EmployeesGallery />

            <div className="card-bg bg-festival w-3/12 mx-auto -mt-7 mb-6">
                <span className="title text-black text-md block">Do you want to grow with us?</span>
                <AnchorLink className="btn btn-black mt-4" to={"/#jobs-table"} >See current job offers</AnchorLink>
            </div>

        </div>
    )
}