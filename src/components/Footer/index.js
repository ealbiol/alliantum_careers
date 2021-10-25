import * as React from "react"
import { Link } from "gatsby"
import { getAllFooterSections, getAllAdresses } from "../../data/data"
import { AnchorLink } from "gatsby-plugin-anchor-links";


export default function Footer() {

    const [footerUnite, setFooterUnite] = React.useState([])
    const [addressUnite, setAddressUnite] = React.useState([])


    React.useEffect(() => {
        getAllFooterSections().then((result) => {
            setFooterUnite(result)

            getAllAdresses().then((result) => {
                setAddressUnite(result)
            })

        })
    }, [])

    return (
        <footer style={{ background: `rebeccapurple`, marginBottom: `1.45rem` }}>
            <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem` }}>

                <div>Alliantum Logo</div>

                <AnchorLink to="/#jobsTableList">The jobs</AnchorLink>
                <div style={{ border: "1px solid black" }} >
                    {
                        footerUnite.map((unite, index) => {
                            return (
                                <div key={index}>{unite.sectionName}</div>
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