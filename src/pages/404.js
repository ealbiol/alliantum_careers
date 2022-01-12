import * as React from "react"

import Layout from "../components/Layout/index"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container mx-auto mb-6 h-screen flex flex-col justify-center " >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>

  </Layout>
)

export default NotFoundPage
