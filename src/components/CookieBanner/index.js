import * as React from "react"

export function CookieBanner() {

    const [cookiesStatus, setCookiesStatus] = React.useState(false)
    const [componentVisibility, setComponentVisibility] = React.useState(true)


    function handleAcceptCookies() {
        setCookiesStatus(!cookiesStatus)
        localStorage.cookiesStatus = "Accepted Cookies"

        setComponentVisibility(false)

    }

    function handleRejectCookies() {
        setCookiesStatus(!cookiesStatus)
        localStorage.cookiesStatus = "Rejected Cookies"

        setComponentVisibility(false)
    }


    React.useEffect(() => {
        if (localStorage.cookiesStatus) {
            setComponentVisibility(false)
        }

    }, [])


    return (
        <div style={{ backgroundColor: "green" }} >
            {componentVisibility &&

                <div>
                    <div>Cookie Banner</div>
                    <button aria-label="Accept Cookie Banner" onClick={handleAcceptCookies} >Accept</button>
                    <button aria-label="Cancel Cookie Banner" onClick={handleRejectCookies} >Cancel</button>
                </div>
            }

        </div>
    )
}