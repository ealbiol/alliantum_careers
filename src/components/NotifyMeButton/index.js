import * as React from "react"
import Select from 'react-select'
import { allPositionsReactSelect } from "../../data/data"
import IconBellWhite from "../../images/notify-me-photos/Icon1.svg"
import IconBellBlack from "../../images/notify-me-photos/Icon2.svg"
import useTheme from "../../hooks/useTheme";
import { AnchorLink } from "gatsby-plugin-anchor-links";


export function NotifyMeButton({ showNotifySubmit, setShowNotifySubmit, submitMessage, setSubmitMessage }) {


    const [userEmail, setUserEmail] = React.useState("")
    const [userPositions, setUserPositions] = React.useState([allPositionsReactSelect[0].id])
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
                setTimeout(() => setSubmitMessage(false), 5000);
            })
            .catch(err => console.error(err));


    }


    const handleBoolean = () => {
        setShowNotifySubmit(!showNotifySubmit)
    }

    const options = allPositionsReactSelect

    function handleChangeDepartment(e) {
        setUserPositions(e.map(department => department.id))
    }




    return (

        <div>
            {showNotifySubmit ?
                theme === "dark" ?
                    <div>
                        <button
                            className="btn btn-white btn-icon mb-3"
                            onClick={handleBoolean}
                        >Close
                        </button>
                    </div>

                    :
                    <button
                        className="btn btn-black btn-icon mb-3"
                        onClick={handleBoolean}
                    >Close
                    </button>

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

                <form onSubmit={handleUserEmail} >

                    <div className="card bg-white dark:bg-black dark:border-white w-full">
                        <div className="">
                            <div className="flex flex-col w-100">
                                <label className="uppercase mb-1">I'm interested in...</label>
                                <Select
                                    defaultValue={[allPositionsReactSelect[0]]}
                                    isMulti
                                    name="positions"
                                    options={options}
                                    className="flex-grow input"
                                    classNamePrefix="select"
                                    onChange={handleChangeDepartment}
                                    className="text-black"
                                />
                                {
                                    userPositions.length > 0 ?
                                        ""
                                        :
                                        <div style={{ color: "red" }} >Required Field</div>
                                }
                            </div>
                            <div className="flex flex-col w-100 mt-2">
                                <label className="uppercase mb-1">{" "}</label>
                                <input
                                    type="email"
                                    name="Notify Me"
                                    placeholder="myEmail@gmail.com" onChange={(e) => setUserEmail(e.currentTarget.value)}
                                    className="flex-grow input text-black"
                                    required
                                />
                            </div>

                        </div>
                        <div className="flex flex-col justify-between mt-3">
                            <div className="flex flex-grow">
                                {
                                    userPositions.length > 0 ?
                                        <button type="submit" className="btn btn-primary w-100 flex flex-grow" >
                                            Subscribe to jobs
                                        </button>
                                        :
                                        <button type="submit" className="btn btn-primary w-100" disabled>
                                            Subscribe to jobs
                                        </button>
                                }
                            </div>
                            <div className="flex-grow pt-1">
                                <small className="leading-4 w-100 pr-2">
                                    You will only receive job offers, as we described on our
                                    <AnchorLink target="_blank" to="/privacy-policy" className="bold">
                                        {" "}Privacy Policy.
                                    </AnchorLink>
                                </small>
                            </div>
                        </div>
                    </div>

                </form>

            }
            {submitMessage &&
                <div className="card bg-white mt-3 dark:bg-black dark:border-white">We sent you a verification email! Please check your inbox.</div>
            }
        </div>

    )
}