import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { AnchorLink } from "gatsby-plugin-anchor-links";


function ThankYouForSubscribing() {
    return (
        <Layout>
            <Seo title="Thank You for subscribing" />
            <div className="container mx-auto my-6 h-screen flex flex-col justify-center ">
                <div>
                    <h1 className="text-md sm:text-lg">We will notify you when new job offers are available</h1>
                    <AnchorLink to="/" >
                        <button className="btn btn-primary">Go back home</button>
                    </AnchorLink>
                </div>
            </div>
        </Layout>
    )
}

export default ThankYouForSubscribing