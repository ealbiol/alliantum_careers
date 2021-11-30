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
        <footer className="bg-black p-4">
            <div className="container-main flex text-white">
                <div className="w-3/12 flex flex-col content-between">
                    <Link to="/" >
                        <AlliantumLogo />

                    </Link>
                    <p>© Alliantum GmbH.</p>
                </div>

                <div className="w-3/12">
                    <AnchorLink className="btn btn-outline" to="/#jobs-table">The jobs</AnchorLink>
                </div>

                <div className="w-3/12">
                    <ul>

                        {
                            footerUnite.map((unite, index) => {
                                return (
                                    <li key={index} >
                                        <AnchorLink to={unite.anchor}>
                                            {unite.sectionName}
                                        </AnchorLink>
                                    </li>
                                )
                            })
                        }

                    </ul>

                </div>
                {
                    addressUnite.map((address, index) => {
                        return (
                            <div key={index}>
                                <div>{address.city.toUpperCase()}</div>
                                <div>{address.country.toUpperCase()}</div>
                                <div>{address.address}</div>
                            </div>
                        )
                    })
                }
                <div className="w-3/12">
                    <ul>
                        <li>
                            <AnchorLink to="/privacy-policy">Privacy Policy</AnchorLink>
                        </li>
                        {/* <li>
                            <AnchorLink to="/cookies">Cookies</AnchorLink>
                        </li> */}
                    </ul>
                </div>



            </div>

        </footer>
    )
}