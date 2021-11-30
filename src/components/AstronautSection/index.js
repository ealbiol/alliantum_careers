import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-parallax";
import useTheme from "../../hooks/useTheme";

export function AstronautSection() {

    const theme = useTheme();

    return (

        <div>
            <div className="ourvalues dark:bg-black dark:text-black">
                <div className="ourvalues__content py-6">
                    <div className="w-4/12 bg-white p-4 rounded-lg self-start ml-auto">
                        <h3 className="title text-md">Our Mission</h3>
                        <p className="text-sm mb-0">
                            To provide cutting-edge and innovative technological solutions tailored to business needs to increase competitiveness and productivity.
                        </p>
                    </div>
                    <div className="w-4/12 bg-white p-4 rounded-lg ml-auto self-end mr-auto z-10">
                        <h3 className="title text-md">Our Vision</h3>
                        <p className="text-sm mb-0">
                            To become the leading provider of e-commerce solutions, from brand development to digital identity and technical implementation.
                        </p>
                    </div>
                </div>
                <div className="ourvalues__images">
                    <div className="ourvalues-image__above">
                        {/* Astronaut Parallax */}
                        <Parallax
                            strength={100}
                            style={{ height: "700px" }}
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
                            <div style={{ height: 612 }}>
                            </div>
                        </Parallax>
                    </div>
                    <div className="ourvalues-image__below">
                        {/* Planet Parallax */}
                        <Parallax
                            strength={100}
                            style={{ height: "700px" }}
                            renderLayer={(percentage) => (
                                <div>
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: "82%",
                                            bottom: `${percentage * 10}%`,
                                            transform: "translate(-50%,-0%)",
                                            width: 600,
                                            height: 600,
                                        }}
                                    >
                                        <StaticImage
                                            src="../../images/astronaut-photos/planet.png"
                                            alt="Astronaut"
                                            placeholder="blurred"
                                            layout="fixed"
                                            width={430}
                                        />
                                    </div>
                                </div>
                            )}
                        >
                            <div style={{ height: 500 }}>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>

    )
}