import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { AnchorLink } from "gatsby-plugin-anchor-links";

export function ThankYouForApplying() {
    return (
        <Layout>
            <Seo title="Thank You for applying" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Thank you for applying!</h1>
            <AnchorLink to="/" >
                <button className="btn btn-primary">Go back home</button>
            </AnchorLink>
        </Layout>

    )
}