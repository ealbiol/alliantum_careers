// import { data } from "autoprefixer";
import * as React from "react"
import { GetAllDepartments } from "../../data/data";
import IconBell from "../../images/notify-me-photos/Icon1.svg"

export function NotifyMeButton() {

    const departmentsLists = [
        { name: "IT", id: 4 },
        { name: "HR", id: 5 },
        { name: "Business System", id: 6 },
        { name: "Digital Marketing", id: 7 }
    ]


    const allDepartments = GetAllDepartments();

    const initialOption = "Select Department"
    const [userEmail, setUserEmail] = React.useState("")
    const [userDepartment, setUserDepartment] = React.useState(initialOption)
    const [showNotifySubmit, setShowNotifySubmit] = React.useState(false)
    const URL = "https://api.sendinblue.com/v3/contacts"


    function handleUserEmail(e) {
        e.preventDefault();
        console.log("User email:--->", userEmail);
        console.log("User department:--->", userDepartment);

        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                // "api-key": sendInBlueApiKey,
                "api-key": process.env.GATSBY_SENDINBLUE_API_KEY,
            },
            body: JSON.stringify({ "email": userEmail, "listIds": departmentId })
        };

        fetch(URL, options)
            .then(response => response.json())
            .then(data => console.log("Added email:--->", data))
            .catch(err => console.error(err));

        console.log(options);

    }


    const allDepsWithoutManagement = allDepartments.filter(department => department !== "Management")
    allDepsWithoutManagement.sort().unshift(initialOption)

    console.log("Sorted Departments with 'Select':--->", allDepsWithoutManagement);
    console.log("user department:--->", userDepartment);



    const matchingDepartment = departmentsLists.find(department => userDepartment === department.name)
    const departmentId = [matchingDepartment?.id]

    const handleBoolean = () => setShowNotifySubmit(!showNotifySubmit)




    return (
        <div>
            <button className="btn btn-outline" onClick={handleBoolean}>Notify me on new jobs</button>

            {showNotifySubmit &&

                <form onSubmit={handleUserEmail} style={{ border: "2px solid rebeccapurple" }} >
                    <input
                        type="email"
                        name="Notify Me"
                        placeholder="email"
                        onChange={(e) => setUserEmail(e.currentTarget.value)}
                        required
                    />
                    <label >Departments:</label>
                    <select name="departments" id="departments" onChange={(e) => setUserDepartment(e.currentTarget.value)} >
                        {
                            allDepsWithoutManagement.map((department, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={department}
                                    >
                                        {department}
                                    </option>
                                )
                            })
                        }
                    </select>
                    {userDepartment === initialOption &&
                        <button type="submit" style={{ color: `gray` }} disabled>
                            <span>(Bell Icon){" "}</span>
                            <span>Submit</span>
                        </button>
                    }
                    {userDepartment !== initialOption &&
                        <button type="submit" style={{ color: `green` }} >
                            <span>(Bell Icon){" "}</span>
                            <span>Submit</span>
                        </button>
                    }
                </form>

            }


        </div>
    )
}