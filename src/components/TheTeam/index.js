import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { EmployeesGallery } from "../EmployeesGallery";
import { CircleBlur } from "../CircleBlur/index"

export function TheTeam() {


    return (
        <div>
            <div className="container mx-auto">
                <div>Meet the team</div>
            </div>
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
                    <div className="blurred-gradient-content">
                        <div className="w-100 relative z-10">

                            <EmployeesGallery />

                            <div className="card-bg bg-white w-10/12 sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12 xxl:w-3/12 mx-auto -mt-7 mb-6 relative z-10">
                                <span className="title text-black text-md block">Do you want to grow with us?</span>
                                <AnchorLink className="btn btn-black btn-full text-center mt-4" to={"/#jobs-table"} >See current job offers</AnchorLink>
                            </div>

                        </div>
                    </div>

                    <CircleBlur blur="160" color="#F9B457" top="40%" left="16%" size="700"
                        keyFrame={ /* YELLOW */
                            `    
                            0%    {  transform: translate(0, 0) }
                            33%   {  transform: scale(0.77) }
                            66%   {  transform: translate(10px, 20px) }
                            100%  {  transform: translate(30px, 40px) }
                            `
                        }
                    />

                    <CircleBlur blur="160" color="#966CE0" top="48%" left="50%" size="700"
                        keyFrame={ /* PURPLE */
                            `    
                            0%    {  transform: translate(0, 0) }
                            33%   {  transform: scale(0.77) }
                            66%   {  transform: translate(10px, 20px) }
                            100%  {  transform: translate(30px, 40px) }
                            `
                        }
                    />

                </div>
            </div>

        </div>
    )
}