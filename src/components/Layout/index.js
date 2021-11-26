import * as React from "react"
import PropTypes from "prop-types"
import Header from "../Header/index"
import Footer from "../Footer/index"
import "./layout.css"
import { SwitchModeButton } from "../SwitchModeButton/index"
// import { CookieBanner } from "../CookieBanner/index"

const Layout = ({ children, titlePage }) => {


  const [isDark, setIsDark] = React.useState(false)


  React.useEffect(() => {

    if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [])

  return (
    <div className={isDark ? "dark" : ""}>
      <Header siteTitle={titlePage} />
      {/* <br />
      <br />
      <br />
      <br /> */}
      <SwitchModeButton isDark={isDark} setIsDark={setIsDark} />
      <div>
        {/* <br />
        <br />
        <br />
        <br /> */}

        <main>{children}</main>

      </div>

      {/* <CookieBanner /> */}

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
