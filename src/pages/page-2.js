import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index"
import Seo from "../components/seo"
//Global:
// import "../scss/index.scss"
import "../scss/pagesScss/page-2.scss";

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>

  </Layout>
)

export default SecondPage


//path intellisense