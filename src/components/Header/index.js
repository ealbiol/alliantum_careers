import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { getAllHeaderAndFooterSections } from "../../data/data"
import { AnchorLink } from "gatsby-plugin-anchor-links";


export default function Header({ siteTitle }) {

  const [headerUnite, setHeaderUnite] = React.useState([])

  React.useEffect(() => {
    getAllHeaderAndFooterSections().then((result) => {
      setHeaderUnite(result)

    })
  }, [])

  return (
    <header style={{ background: `rebeccapurple`, marginBottom: `1.45rem` }}>

      <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem` }}>

        <div>
          <Link to="/" >Logo Alliantum</Link>
          <div>
            {
              headerUnite.map((unite, index) => {
                return (
                  <span key={index} style={{ margin: 0 }}>
                    <AnchorLink
                      to={unite.anchor} //---> Route to be changed to each level of the main Page with the exception of "The jobs" that has its unique page.
                      style={{ color: `white`, textDecoration: `none` }}>
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

