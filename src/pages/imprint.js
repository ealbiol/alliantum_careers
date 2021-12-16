import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/seo"
import { graphql } from "gatsby"


function ImprintPage({ data, location }) {

    const imprint = data.markdownRemark;


    return (
        <Layout>
            <Seo title="Imprint" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container-main" >
                <section className=""
                    dangerouslySetInnerHTML={{ __html: imprint.html }}
                    itemProp="articleBody"
                />
            </div>

        </Layout>
    )
}

export default ImprintPage

export const pageQuery = graphql`
query {
    markdownRemark(fileAbsolutePath: {regex: "/content/legal/imprint/"}) {
        frontmatter {
          title
        }
        html
      }
    }
`