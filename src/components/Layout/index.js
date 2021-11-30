import * as React from "react"
import PropTypes from "prop-types"
import Header from "../Header/index"
import Footer from "../Footer/index"
import "./layout.css"
import { SwitchModeButton } from "../SwitchModeButton/index"
// import { CookieBanner } from "../CookieBanner/index"
import ThemeContext from "../../context/ThemeContext"


const Layout = ({ children, titlePage }) => {


  const [themeData, setThemeData] = React.useState("")
  // const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    console.log("window:--->", window.matchMedia('(prefers-color-scheme: dark)'))
    if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      // setIsDark(true)
      setThemeData("dark")
    } else {
      // setIsDark(false)
      setThemeData("light")
    }

    setThemeData(
      localStorage?.length !== 0 && localStorage?.theme !== undefined ? localStorage?.theme : (
        window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
      ))
  }, [/*isDark */])


  console.log("themeData in Layout:--->", themeData);


  return (
    <ThemeContext.Provider value={themeData} >
      <div className={themeData}>
        <div className="bg-white dark:bg-black dark:text-white" >
          <Header siteTitle={titlePage} />
          <br />
          <br />
          <br />
          <br />
          <SwitchModeButton themeData={themeData} setThemeData={setThemeData} />
          <div>
            <h1>{themeData}</h1>
            <h1 className="bg-cornflower-blue dark:bg-black dark:text-white" >{themeData}</h1>
            <br />
            <br />
            <br />
            <br />
            <main>{children}</main>

          </div>

          {/* <CookieBanner /> */}

          <Footer />
        </div>
      </div>

    </ThemeContext.Provider>



  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
