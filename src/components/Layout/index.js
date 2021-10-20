/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/index"
import Footer from "../Footer/index"
import "./layout.css"
import { Test } from "./styles"

const Layout = ({ children, titlePage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        ...metadata
      }
    }
  `)

  return (
    <>
      <Header siteTitle={titlePage} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Test>Im part of the header. Testing Styled Components</Test>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
