import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AstronautImage from "../../images/astronaut-photos/astronaut.svg"

export function AstronautSection() {
    return (
        <div style={{ backgroundColor: "#529DFC" }} >
            <div>
                <h3>Our Mission</h3>
                <div>
                    To provide cutting-edge and innovative technological solutions tailored to business needs to increase competitiveness and productivity.
                </div>
            </div>
            <StaticImage
                src="../../images/astronaut-photos/astronaut.svg"
                alt="Astronaut"
                placeholder="blurred"
                layout="fixed"
                width={410}
                height={600}
            />
            <div>
                <h3>Our Vision</h3>
                <div>
                    To become the leading provider of e-commerce solutions, from brand development to digital identity and technical implementation.
                </div>
            </div>
        </div>
    )
}