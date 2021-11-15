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
        console.log("Cookie Banner:", localStorage.cookiesStatus);
        if (localStorage.cookiesStatus) {
            // if (localStorage.hasOwnProperty("cookiesStatus")) {
            setComponentVisibility(false)
        }

    }, [])


    return (
        <div style={{ backgroundColor: "green" }} >
            {componentVisibility &&

                <div>
                    <div>Cookie Banner</div>
                    <button onClick={handleAcceptCookies} >Accept</button>
                    <button onClick={handleRejectCookies} >Cancel</button>
                </div>
            }

        </div>
    )
}