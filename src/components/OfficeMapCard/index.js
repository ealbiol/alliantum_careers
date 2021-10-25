import * as React from "react"


export function OfficeMapCard({ addressUnite }) {
    return (
        <div>

            <div style={{ border: "1px solid blue" }}>
                <div>Google Maps Frame</div>
                <div>
                    <div>{addressUnite?.city}</div>
                    <div>{addressUnite.country}</div>
                    <div>{addressUnite.address}</div>
                </div>
            </div>

        </div>
    )
}