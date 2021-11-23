import * as React from "react"
import Select from 'react-select'
import { allPositionsReactSelect } from "../../data/data"
import IconBell from "../../images/notify-me-photos/Icon1.svg"

export function NotifyMeButton() {


    const [userEmail, setUserEmail] = React.useState("")
    const [userPositions, setUserPositions] = React.useState([0])
    const [showNotifySubmit, setShowNotifySubmit] = React.useState(false)
    const [submitMessage, setSubmitMessage] = React.useState(false)


    const URL = "https://api.sendinblue.com/v3/contacts"


    function handleUserEmail(e) {
        e.preventDefault();


        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "api-key": process.env.GATSBY_SENDINBLUE_API_KEY,
            },
            body: JSON.stringify({ "email": userEmail, "listIds": userPositions })

        };

        fetch(URL, options)
            .then(response => response.json())
            .then(data => {
                console.log("Data:--->", data)
                setSubmitMessage(true)
                setShowNotifySubmit(false)
                setTimeout(() => setSubmitMessage(false), 50000);
            })
            .catch(err => console.error(err));

        console.log(options);

    }


    const handleBoolean = () => {
        setShowNotifySubmit(!showNotifySubmit)
        setSubmitMessage(false)
    }

    const options = allPositionsReactSelect

    function handleChangeDepartment(e) {
        console.log("e.target.value:--->", e);
        setUserPositions(e.map(department => department.id))
    }

    console.log("userPositions:--->", userPositions);

    return (
        <div>
            {showNotifySubmit ?
                <button
                    className="btn btn-outline btn-icon"
                    onClick={handleBoolean}
                >X</button>
                :
                <button
                    className="btn btn-outline btn-icon"
                    onClick={handleBoolean}
                >
                    <span><IconBell /></span>
                    <span> Notify me on new jobs</span>
                </button>

            }


            {showNotifySubmit &&

                <form onSubmit={handleUserEmail} style={{ border: "2px solid rebeccapurple" }}  >

                    <div>
                        <label>Your email:{" "}</label>
                        <input
                            type="email"
                            name="Notify Me"
                            placeholder="email"
                            onChange={(e) => setUserEmail(e.currentTarget.value)}
                            required
                        />
                        <div >Job Positions:</div>

                        {
                            userPositions.length > 0 ?
                                ""
                                :
                                <div style={{ color: "red" }} ><i>Required Field</i></div>
                        }

                        <Select
                            defaultValue={[allPositionsReactSelect[0]]}
                            isMulti
                            name="positions"
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={handleChangeDepartment}
                        />


                        {
                            userPositions.length > 0 ?
                                <button type="submit" style={{ color: `green` }} >
                                    <span><IconBell /></span>
                                    <span>Submit</span>
                                </button>
                                :
                                <button type="submit" style={{ color: `gray` }} disabled>
                                    <span>Submit</span>
                                </button>
                        }
                    </div>

                </form>

            }
            {submitMessage &&
                <div style={{ color: "green" }} >Email sent!</div>}
        </div>
    )
}