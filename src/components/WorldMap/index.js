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
        <div>
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