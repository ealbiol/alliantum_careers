import * as React from "react"
import { OfficeMapCard } from "../OfficeMapCard"
import { getAllAdresses } from "../../data/data"


export function WorldMap() {

    const [addressUnite, setAddressUnite] = React.useState([])
    React.useEffect(() => {

        getAllAdresses().then((result) => {
            setAddressUnite(result)
        })

    }, [])

    return (
        <div style={{ border: "1px solid black" }} >
            <div>
                THE OFFICE
            </div>
            <div>
                German spirit.
                Spanish passion.
            </div>
            {
                addressUnite.map((address, index) => {
                    return (
                        <OfficeMapCard key={index} addressUnite={address} />
                    )
                })
            }
        </div>
    )
}