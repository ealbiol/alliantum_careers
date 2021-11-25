import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

function PrivacyPolicy({ data, location }) {

    const privacyPolicy = data.markdownRemark;

    return (
        <Layout>
            <Seo title="Privacy Policy" />

            <div className="container-main" >
                <section className=""
                    dangerouslySetInnerHTML={{ __html: privacyPolicy.html }}
                    itemProp="articleBody"
                />
            </div>


        </Layout>
    )
}

export default PrivacyPolicy

export const pageQuery = graphql`
query {
    markdownRemark(fileAbsolutePath: {regex: "/content/legal/privacyPolicy/"}) {
        frontmatter {
          title
        }
        html
      }
    }
`