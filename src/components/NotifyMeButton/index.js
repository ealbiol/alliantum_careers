import * as React from "react"
import { sendInBlueApiKey } from "../../../credentials";

export function NotifyMeButton() {

    const [userEmail, setUserEmail] = React.useState("")
    const URL = "https://api.sendinblue.com/v3/contacts"

    function handleUserEmail(e) {
        e.preventDefault();
        console.log("User email:--->", userEmail);

        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "api-key": sendInBlueApiKey,
            },
            body: JSON.stringify({ "email": userEmail })
        };

        fetch(URL, options)
            .then(response => response.json())
            .then(data => console.log("Added email:--->", data))
            .catch(err => console.error(err));

        console.log(options);
    }


    return (
        <form onSubmit={handleUserEmail} >
            <input
                type="email"
                name="Notify Me"
                placeholder="email"
                onChange={(e) => setUserEmail(e.currentTarget.value)}
                required
            />
            <button type="submit"   >
                <span>(Bell Icon){" "}</span>
                <span>Notify me on new jobs</span>
            </button>
        </form>
    )
}