import * as React from "react"
import { Link } from "gatsby"
import { getAllHeaderAndFooterSections, getAllAdresses } from "../../data/data"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import AlliantumLogo from "../../images/header-photos/Image1.svg"


export default function Footer() {

    const [footerUnite, setFooterUnite] = React.useState([])
    const [addressUnite, setAddressUnite] = React.useState([])


    React.useEffect(() => {
        getAllHeaderAndFooterSections().then((result) => {
            setFooterUnite(result)

            getAllAdresses().then((result) => {
                setAddressUnite(result)
            })

        })
    }, [])

    return (
        <footer style={{ background: `rebeccapurple`, marginBottom: `1.45rem` }}>
            <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem` }}>

                <Link to="/" >
                    <AlliantumLogo />
                </Link>

                <AnchorLink to="/#jobs-table">The jobs</AnchorLink>
                <div style={{ border: "1px solid black" }} >
                    {
                        footerUnite.map((unite, index) => {
                            return (
                                <AnchorLink key={index} to={unite.anchor}>
                                    {unite.sectionName}
                                </AnchorLink>
                            )
                        })
                    }
                </div>
                {
                    addressUnite.map((address, index) => {
                        return (
                            <div key={index} style={{ border: "1px solid black" }} >
                                <div>{address.city.toUpperCase()}</div>
                                <div>{address.country.toUpperCase()}</div>
                                <div>{address.address}</div>
                            </div>
                        )
                    })
                }
                <div>© Alliantum GmbH.</div>
            </div>

        </footer>
    )
}