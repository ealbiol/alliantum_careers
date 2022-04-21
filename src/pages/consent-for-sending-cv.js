import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

function ConsentForSendingCv({ data }) {

    const consentForSendingCv = data.markdownRemark;

    return (
        <Layout>
            <Seo title="Consent for Sending CV" />

            <div className="container-main" >

                <br />
                <br />
                <br />
                <br />
                <br />
                <section className=""
                    dangerouslySetInnerHTML={{ __html: consentForSendingCv.html }}
                    itemProp="articleBody"
                />
            </div>
        </Layout>
    )
}

export default ConsentForSendingCv

export const pageQuery = graphql`
query {
    markdownRemark(fileAbsolutePath: {regex: "/content/legal/consentForSendingCv/"}) {
        frontmatter {
          title
        }
        html
      }
    }
`