import * as React from "react"
import Select from 'react-select'
import { allPositionsReactSelect } from "../../data/data"
import IconBellWhite from "../../images/notify-me-photos/Icon1.svg"
import IconBellBlack from "../../images/notify-me-photos/Icon2.svg"
import useTheme from "../../hooks/useTheme";


export function NotifyMeButton() {


    const [userEmail, setUserEmail] = React.useState("")
    const [userPositions, setUserPositions] = React.useState([0])
    const [showNotifySubmit, setShowNotifySubmit] = React.useState(false)
    const [submitMessage, setSubmitMessage] = React.useState(false)
    const theme = useTheme();


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
                setSubmitMessage(true)
                setShowNotifySubmit(false)
                setTimeout(() => setSubmitMessage(false), 50000);
            })
            .catch(err => console.error(err));


    }


    const handleBoolean = () => {
        setShowNotifySubmit(!showNotifySubmit)
        setSubmitMessage(false)
    }

    const options = allPositionsReactSelect

    function handleChangeDepartment(e) {
        setUserPositions(e.map(department => department.id))
    }


    return (
        <div>
            {showNotifySubmit ?
                <button
                    className="btn btn-outline btn-icon"
                    onClick={handleBoolean}
                >X</button>
                :
                theme === "dark" ?
                    <button
                        className="btn btn-white btn-icon"
                        onClick={handleBoolean}
                    >

                        <span><IconBellBlack /></span>
                        <span> Notify me on new jobs</span>

                    </button>
                    :
                    <button
                        className="btn btn-black btn-icon"
                        onClick={handleBoolean}
                    >

                        <span><IconBellWhite /></span>
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
                <div style={{ color: "green" }} >Email sent! Please check your inbox.</div>
            }
        </div>
    )
}