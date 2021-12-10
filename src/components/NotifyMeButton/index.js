import * as React from "react"
import Select from 'react-select'
import { allPositionsReactSelect } from "../../data/data"
import IconBellWhite from "../../images/notify-me-photos/Icon1.svg"
import IconBellBlack from "../../images/notify-me-photos/Icon2.svg"
import useTheme from "../../hooks/useTheme";


export function NotifyMeButton({ showNotifySubmit, setShowNotifySubmit, submitMessage, setSubmitMessage }) {


    const [userEmail, setUserEmail] = React.useState("")
    const [userPositions, setUserPositions] = React.useState([0])
    // const [submitMessage, setSubmitMessage] = React.useState(false)
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

                    <div className="card bg-white dark:bg-black dark:border-white">
                        <div className="flex flex-col xl:flex-row">
                            <div className="flex flex-col xl:pr-2 w-100 xl:w-6/12">
                                <label className="uppercase mb-1">Your email{" "}</label>
                                <input
                                    type="email"
                                    name="Notify Me"
                                    placeholder="email" onChange={(e) => setUserEmail(e.currentTarget.value)}
                                    className="rounded h-4 text-black p-2"
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-100 xl:w-6/12">
                                <label className="uppercase mb-1">Job Positions:</label>

                                <Select
                                    defaultValue={[allPositionsReactSelect[0]]}
                                    isMulti
                                    name="positions"
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={handleChangeDepartment}
                                    className="text-black"
                                />
                                {
                                    userPositions.length > 0 ?
                                        ""
                                        :
                                        <div style={{ color: "red" }} ><i>Required Field</i></div>
                                }
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
                            <div className="flex-grow">
                                <small className="leading-4 w-100 pt-2 pr-2">When you press this button, you accept our Privacy Policy. Your information will only be used internally to manage your application. </small>
                            </div>
                        </div>
                    </div>

                </form>

            }
            {submitMessage &&
                <div className="card bg-white mt-3 dark:bg-black dark:border-white"  >We sent you a verification email! Please check your inbox.</div>
            }
        </div>

    )
}