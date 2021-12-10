import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { AnchorLink } from "gatsby-plugin-anchor-links";


function ThankYouForSubscribing() {
    return (
        <Layout>
            <Seo title="Thank You for subscribing" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Thank You for Subscribing!</h1>
            <AnchorLink to="/" >
                <button>Go back to home Page.</button>
            </AnchorLink>
        </Layout>
    )
}

export default ThankYouForSubscribing