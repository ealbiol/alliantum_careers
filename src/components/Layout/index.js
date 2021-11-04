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
import { SwitchModeButton } from "../SwitchModeButton"

const Layout = ({ children, titlePage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        ...metadata
      }
    }
  `)

  const [isDark, setIsDark] = React.useState("")


  return (
    <div className={isDark ? "dark" : ""}>
      <Header siteTitle={titlePage} />

      <SwitchModeButton isDark={isDark} setIsDark={setIsDark} />

      <div>
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
