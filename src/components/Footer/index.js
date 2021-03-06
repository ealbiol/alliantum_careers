import * as React from "react"
import { Link } from "gatsby"
import { getAllHeaderAndFooterSections, getAllAdresses } from "../../data/data"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import AlliantumLogoWhite from "../../images/header-photos/Alliantum-white.svg"
import AlliantumIconLinkedin from "../../images/social/social-linkedin.svg"

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
        <footer className="bg-black py-4 relative z-10 text-white border-t">

            <section className="w-full bg-black pt-4">
                <div className="py-12 container mx-auto">
                    <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
                        <div className="col-span-3">
                            <div>
                                <Link aria-label="logo" to="/" >
                                    <AlliantumLogoWhite />
                                </Link>
                                <AnchorLink className="btn btn-outline-white mt-3" to="/#jobs-table">Work with us</AnchorLink>
                            </div>
                            <p className="my-4 text-xs leading-normal text-gray-500">

                            </p>
                        </div>
                        <nav className="col-span-1 md:col-span-1 lg:col-span-3">
                            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Careers</p>
                            <ul className="m-0">
                                {
                                    footerUnite.map((unite, index) => {
                                        return (
                                            <li key={index} >
                                                <AnchorLink className="mb-3 font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary" to={unite.anchor}>
                                                    {unite.sectionName}
                                                </AnchorLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <nav className="col-span-1 md:col-span-1 lg:col-span-3">
                            <div className="">
                                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Social</p>
                                <AnchorLink target="_blank" to="https://www.linkedin.com/company/alliantum/mycompany/" >
                                    <button aria-label="Alliantum Icon Linkedin" className="flex mb-3 font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary" >
                                        <AlliantumIconLinkedin className="w-3" />
                                    </button>
                                </AnchorLink>
                            </div>
                        </nav>
                        <div className="col-span-2 md:col-span-1 lg:col-span-3 pt-2 lg:pt-0">
                            {
                                addressUnite.map((address, index) => {
                                    return (
                                        <div className="mb-4" key={index}>
                                            <div>{address.city.toUpperCase()}</div>
                                            <div className="text-sm text-bold">{address.country.toUpperCase()}</div>
                                            <div className="text-xs">{address.address}</div>
                                            {
                                                address.country === "Spain" ?
                                                    <a className="text-xs" aria-label={`Footer link to ${address.country} office`} href={`tel:${address.phone}`}><div>{address.phone}</div></a>
                                                    :
                                                    ""
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center pt-3">
                        <p className="mb-6 text-xs text-left text-gray-600 md:mb-0">?? Alliantum GmbH.</p>
                        <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
                            <AnchorLink to="/imprint" >
                                <span className="text-xs text-gray-600 transition hover:text-primary" >Imprint</span>
                            </AnchorLink>
                            <AnchorLink to="/privacy-policy" >
                                <span className="text-xs text-gray-600 transition hover:text-primary" >Privacy Policy</span>
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </section>





        </footer>
    )
}