import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { AnchorLink } from "gatsby-plugin-anchor-links";


function ThankYouForApplying() {
    return (
        <Layout>
            <Seo title="Thank You for applying" />
            <div className="container mx-auto mb-6 h-screen flex flex-col justify-center ">
                <div>
                    <h1 className="text-md sm:text-lg">Application sent.</h1>
                    <h1 className="text-md sm:text-lg">Thank you for applying!</h1>

                    <AnchorLink to="/" >
                        <button className="btn btn-primary">Go back home</button>
                    </AnchorLink>
                </div>
            </div>
        </Layout>
    )
}

export default ThankYouForApplying