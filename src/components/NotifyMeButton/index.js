import * as React from "react"
import { sendInBlueApiKey, departmentsLists } from "../../../credentials";
import { GetAllDepartments } from "../../data/data";

export function NotifyMeButton() {
    console.log("departmentsLists:--->", departmentsLists);
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
                "api-key": sendInBlueApiKey,
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
    allDepsWithoutManagement.sort().unshift("Select Department")
    console.log("Sorted Departments with 'Select':--->", allDepsWithoutManagement);

    console.log("user department:--->", userDepartment);

    const matchingDepartment = departmentsLists.find(department => userDepartment === department.name)
    const departmentId = [matchingDepartment?.id]

    const handleBoolean = () => setShowNotifySubmit(!showNotifySubmit)


    return (
        <div>
            {/* Option 1 */}
            {/* <form onSubmit={handleUserEmail} >
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
            </form> */}


            {/* Option 2 */}
            <button onClick={handleBoolean} >Notify me on new jobs</button>
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