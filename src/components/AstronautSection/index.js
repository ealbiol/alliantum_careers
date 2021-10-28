import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from 'react-scroll-parallax';


export function AstronautSection() {
    return (
        <div className="container mx-auto relative h-screen py-6 flex justify-between flex-initial align-middle">
            <div className="absolute">
                <Parallax x={[-100, 35]}>
                    <StaticImage
                        src="../../images/astronaut-photos/astronaut.svg"
                        alt="Astronaut"
                        placeholder="blurred"
                        layout="fixed"
                        width={410}
                        height={600}
                    />
                </Parallax>
            </div>
            <div className="w-1/2 bg-white p-4 rounded-lg self-start">
                <h3>Our Mission</h3>
                <p className="text-md">
                    To provide cutting-edge and innovative technological solutions tailored to business needs to increase competitiveness and productivity.
                </p>
            </div>
<<<<<<< HEAD
            <div className="w-1/2 bg-white p-4 rounded-lg ml-auto self-end">
=======
            <div>
                <Parallax x={[50, -50]}>
                    <StaticImage
                        src="../../images/astronaut-photos/astronaut.png"
                        alt="Astronaut"
                        placeholder="blurred"
                        layout="fixed"
                        width={410}
                        height={600}
                    />
                </Parallax>
            </div>
            <div>
                <Parallax y={[50, -50]}>
                    <StaticImage
                        src="../../images/astronaut-photos/planet.png"
                        alt="PLanet"
                        placeholder="blurred"
                        layout="fixed"
                        width={400}
                        height={390}
                    />
                </Parallax>
            </div>
            <div>
>>>>>>> 3f44c5fb77b38f464536250b0d81e09cf448537c
                <h3>Our Vision</h3>
                <p className="text-sm">
                    To become the leading provider of e-commerce solutions, from brand development to digital identity and technical implementation.
                </p>
            </div>
        </div>
    )
}