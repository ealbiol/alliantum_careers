import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { getAllHeaderAndFooterSections } from "../../data/data"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { SwitchModeButton } from "../SwitchModeButton/index";
import useTheme from "../../hooks/useTheme";
import AlliantumLogoWhite from "../../images/header-photos/Alliantum-white.svg"
import AlliantumLogoBlack from "../../images/header-photos/Alliantum-black.svg"
import HeaderBurgerMenu from "../HeaderBurgerMenu";


export default function Header({ siteTitle, themeData, setThemeData }) {

  const theme = useTheme();

  const [headerUnite, setHeaderUnite] = React.useState([])

  React.useEffect(() => {
    getAllHeaderAndFooterSections().then((result) => {
      setHeaderUnite(result)

    })
  }, [])


  return (
    <header className="fixed w-full z-30 bg-white dark:bg-black dark:text-white py-1 lg:py-3">

      <div className="container-main">

        <div className="flex flex-row justify-between bb bg-red">

          <Link to="/" >
            <div className="flex items-end">
              {
                theme === "dark" ?
                  <AlliantumLogoWhite style={{ margin: "4px" }} />
                  :
                  <AlliantumLogoBlack style={{ margin: "4px" }} />
              }
              <span className="text-xs">CAREERS</span>
            </div>
          </Link>
          <div className="flex">

            <div className="hidden lg:flex items-center" >
              <ul className="list-none flex p-0 m-0">
                {
                  headerUnite.map((unite, index) => {
                    return (
                      <li key={index} style={{ margin: 0 }}  >
                        <AnchorLink
                          to={unite.anchor}
                          style={{ color: `white`, textDecoration: `none` }}
                          className="ml-3"
                        >
                          {unite.sectionName}
                        </AnchorLink>
                      </li>
                    )
                  })
                }
              </ul>
              <span className="ml-2" >
                <SwitchModeButton themeData={themeData} setThemeData={setThemeData} />
              </span>
            </div>
            <div className="flex lg:hidden" >
              <SwitchModeButton themeData={themeData} setThemeData={setThemeData} />
              <HeaderBurgerMenu />
            </div>

          </div>


        </div>




      </div>

    </header>
  )
}




// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div>Header</div>

//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <span style={{ margin: 0 }}>

//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </span>



//     </div>

//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

