import * as React from "react"
import PropTypes from "prop-types"
import Header from "../Header/index"
import Footer from "../Footer/index"
import "./layout.css"
import { SwitchModeButton } from "../SwitchModeButton/index"
// import { CookieBanner } from "../CookieBanner/index"
import ThemeContext from "../../context/ThemeContext"


const Layout = ({ children, titlePage }) => {


  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {

    if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }

  }, [])


  const themeData = {
    theme: typeof localStorage !== 'undefined' ? localStorage.theme : null
  }

  // themeData = typeof localStorage !== 'undefined' ? localStorage.theme : "light"     // false? o lo que sea el valor inicial

  console.log("themeData in Layout:--->", themeData.theme);


  return (
    <ThemeContext.Provider value={themeData.theme} >
      <div className={isDark ? "dark" : ""}>
        <Header siteTitle={titlePage} />
        <br />
        <br />
        <br />
        <br />
        <SwitchModeButton isDark={isDark} setIsDark={setIsDark} />
        <div>
          <h1>{isDark ? "Dark" : "Light"}</h1>
          <h1 className="bg-cornflower-blue dark:bg-black dark:text-white" >{isDark ? "Dark" : "Light"}</h1>
          <br />
          <br />
          <br />
          <br />
          <main>{children}</main>

        </div>

        {/* <CookieBanner /> */}

        <Footer />
      </div>
    </ThemeContext.Provider>



  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
