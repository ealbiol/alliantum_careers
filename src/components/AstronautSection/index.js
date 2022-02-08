import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-parallax";

export function AstronautSection() {


    return (

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

                    <div className="trianglesWrapper">
                        <div className="triangle triangle-lg triangleColor-general-2"
                            style={{
                                top: 300,
                                left: "25%",
                                transform: "rotate(120deg)",
                                animationDuration: "38s"
                            }}>
                        </div>
                        <div className="triangle triangle-md triangleColor-general-3"
                            style={{
                                top: 600,
                                left: "39%",
                                transform: "rotate(40deg)",
                                animationDuration: "42s"
                            }}>
                        </div>
                        <div className="triangle triangle-lg triangleColor-general-1"
                            style={{
                                top: 700,
                                left: "51%",
                                transform: "rotate(60deg)",
                                animationDuration: "50s"
                            }}>
                        </div>
                    </div>
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
                                            loading="lazy"
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

    )
}