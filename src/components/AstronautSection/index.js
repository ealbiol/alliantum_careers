import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-parallax";
import { CircleBlur } from "../CircleBlur/index"

export function AstronautSection() {


    return (

        <div className="blurred-gradient-wrapper">
            <div className="blurred-gradient-container">
                <div className="blurred-gradient-content">
                    <div className="w-full">

                        <div className="ourvalues dark:bg-black dark:text-black">
                            <div className="ourvalues__content z-10 absolute flex flex-col lg:flex-row justify-around h-screen px-2 sm:px-5 lg:py-6">
                                <div className="w-100 lg:w-8/12 xl:w-4/12 bg-bleach p-4 rounded-lg self-start ml-auto">
                                    <h3 className="title text-md">Our Mission</h3>
                                    <p className="lg:text-sm mb-0">
                                        To provide cutting-edge and innovative technological solutions tailored to business needs to increase competitiveness and productivity.
                                    </p>
                                </div>
                                <div className="w-100 lg:w-8/12 xl:w-4/12 bg-bleach p-4 rounded-lg ml-auto self-end mr-auto z-10">
                                    <h3 className="title text-md">Our Vision</h3>
                                    <p className="lg:text-sm mb-0">
                                        To become the leading provider of e-commerce solutions, from brand development to digital identity and technical implementation.
                                    </p>
                                </div>
                            </div>

                            <div className="ourvalues__images">
                                <div className="ourvalues-image__above">
                                    {/* Astronaut Parallax */}
                                    <Parallax
                                        strength={1400}
                                        style={{ height: "1900px" }}
                                        renderLayer={(percentage) => (
                                            <div>
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        // background: `rgba(255, 125, 0, ${percentage * 1})`,
                                                        // backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')",

                                                        //Horizontal:
                                                        // left: `${percentage * 100}%`,

                                                        //Vertical:
                                                        left: "50%",
                                                        bottom: `${percentage * 50}%`,

                                                        // borderRadius: "50%",
                                                        transform: "translate(-50%,-0%)",
                                                        width: 612,

                                                    }}
                                                >
                                                    <StaticImage
                                                        src="../../images/astronaut-photos/astronaut.png"
                                                        alt="Astronaut"
                                                        placeholder="blurred"
                                                        layout="fixed"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    >
                                    </Parallax>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <CircleBlur blur="160" color="#91E7C8" top="40%" left="16%" size="700"
                    keyFrame={ /* GREEN */
                        `    
                            0%    {  transform: translate(0, 0) }
                            33%   {  transform: scale(0.77) }
                            66%   {  transform: translate(10px, 20px) }
                            100%  {  transform: translate(30px, 40px) }
                            `
                    }
                />

                <CircleBlur blur="160" color="#FCE569" top="48%" left="50%" size="700"
                    keyFrame={ /* YELLOW */
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





    )
}