import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { getAllHeaderAndFooterSections } from "../../data/data"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import AlliantumLogo from "../../images/header-photos/Image1.svg"

export default function Header({ siteTitle }) {

  const [headerUnite, setHeaderUnite] = React.useState([])

  React.useEffect(() => {
    getAllHeaderAndFooterSections().then((result) => {
      setHeaderUnite(result)

    })
  }, [])

  return (
    <header className="fixed w-full z-30 bg-white" style={{ marginBottom: `1.45rem` }}>

      <div className="container-main">


        <div className="flex flex-row justify-between py-3 bb bg-red">

          <Link to="/" >
            <div className="flex items-end">
              <AlliantumLogo style={{ margin: "4px" }} />
              <span className="text-xs">CAREERS</span>
            </div>
          </Link>

          <div>
            {
              headerUnite.map((unite, index) => {
                return (
                  <span key={index} style={{ margin: 0 }}  >
                    <AnchorLink
                      to={unite.anchor}
                      style={{ color: `white`, textDecoration: `none` }}
                      className="ml-3"
                    >
                      {unite.sectionName}
                    </AnchorLink>
                  </span>
                )
              })
            }
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

