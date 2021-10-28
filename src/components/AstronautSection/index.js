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
            <div className="w-1/2 bg-white p-4 rounded-lg ml-auto self-end">
                <h3>Our Vision</h3>
                <p className="text-sm">
                    To become the leading provider of e-commerce solutions, from brand development to digital identity and technical implementation.
                </p>
            </div>
        </div>
    )
}