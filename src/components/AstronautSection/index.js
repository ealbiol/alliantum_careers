import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax, Background } from "react-parallax";


export function AstronautSection() {
    return (
        <div>
            <div style={{ width: "100%", border: "1px solid black", height: "100%" }} >

                {/* Astronaut Parallax */}
                <Parallax
                    strength={200}
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
                                    // top: "50%",

                                    //Vertical:
                                    left: "50%",
                                    top: `${percentage * 50}%`,

                                    // borderRadius: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: 700,
                                    height: 700,
                                    paddingTop: "1%",
                                    border: "1px solid black",
                                }}
                            >
                                <StaticImage
                                    src="../../images/astronaut-photos/astronaut.png"
                                    alt="Astronaut"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={390}
                                    height={570}
                                />
                            </div>
                        </div>
                    )}
                >
                    <div style={{ height: 500 }}>
                    </div>
                </Parallax>
            </div>

            <div className="container mx-auto relative h-screen py-6 flex justify-between flex-initial align-middle">
                <div className="w-1/2 bg-white p-4 rounded-lg self-start">
                    <h3>Our Mission</h3>
                    <p className="text-md">
                        To provide cutting-edge and innovative technological solutions tailored to business needs to increase competitiveness and productivity.
                    </p>
                </div>
                <div className="w-1/2 bg-white p-4 rounded-lg ml-auto self-end">
                    <h3>Our Vision</h3>
                    <p className="text-sm">
                        To become the leading provider of e-commerce solutions, from brand development to digital identity and technical implementation.
                    </p>
                </div>
            </div>

            {/* Planet Parallax */}
            <Parallax
                strength={200}
                style={{ height: "700px" }}
                renderLayer={(percentage) => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: `${percentage * 100}%`,
                                transform: "translate(-50%,-50%)",
                                width: 500,
                                height: 500,
                                paddingTop: "1%",
                                border: "1px solid black",
                            }}
                        >
                            <StaticImage
                                src="../../images/astronaut-photos/planet.png"
                                alt="Astronaut"
                                placeholder="blurred"
                                layout="fixed"
                                width={430}
                                height={423}
                            />
                        </div>
                    </div>
                )}
            >
                <div style={{ height: 500 }}>
                </div>
            </Parallax>
        </div>

    )
}