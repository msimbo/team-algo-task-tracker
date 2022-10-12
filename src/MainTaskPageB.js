import React, {useEffect, useState} from 'react';
import NewTaskCard from "./NewTaskCard";


const MainTaskPageB = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [privacy, setPrivacy] = useState('public');
    //const [completed, setCompleted] = useState('false');
    const [created_date, setDate] = useState(new Date());
    const [important, setImportant] = useState("false")
    const dateNow = Date()
    const ALL_TASK_DATA_API_URL_B = "https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB"


    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handlePrivacy = (event) => {
        if (event.target.value === "on") {
            setPrivacy("private")
        }

        if (privacy === "private") {
            setPrivacy("public")
        }


        //setPrivacy(event.target.value)
        //console.log(privacy)
    }
    const handleImportant = (event) => {
        if (event.target.value === "on") {
            setImportant("true")
        }

        if (important === "true") {
            setPrivacy("false")
        }


    }

    const addNewTask = async () => {

        const newTask = [{
            title: title,
            description: description,
            privacy: privacy,
            important: important,
            created_at: "10/6/2022",
            completed: "false",
            user_id: 2
        }]

        const response = await fetch(ALL_TASK_DATA_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",

            },
            body: JSON.stringify(newTask)


        });
        //const result = await response.json()
        //setAllTaskData(result)
        //console.log(result)
        //return result


    }
    //Start of filtering logic

    const ALL_TASK_DATA_API_URL = "https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?select=*"
    const ALL_COMPLETED_API_URL = "https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?completed=eq.true&select=*"
    const IMPORTANT_TASKS_API_URL = "https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?important=eq.true&select=*"

    const currentDate = Date()
    const [allTaskData, setAllTaskData] = useState([])


    const getTaskData = async () => {
        const response = await fetch(ALL_TASK_DATA_API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ"
            },

        });
        const result = await response.json()
        setAllTaskData(result)
        console.log(result)
        //console.log(currentDate)
        return result


    }
    const getCompletedTasks = async () => {
        const response = await fetch(ALL_COMPLETED_API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ"
            },

        });
        const result = await response.json()
        setAllTaskData(result)
        console.log(result)
        return result


    }
    const getImportantTasks = async () => {
        const response = await fetch(IMPORTANT_TASKS_API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ"
            },

        });
        const result = await response.json()
        setAllTaskData(result)
        console.log(result)
        return result


    }


    useEffect(() => {
        console.log("change detected")
        const newFunc = async () => {
            const newData = await getTaskData()
            setAllTaskData(newData)
        }
        //getTaskData()
        newFunc()

        //setAllTaskData[]
    }, [])











    return (
        <div>
        <div className="relative">
            <div className="tabs justify-center text-center font-bold bg-gray-50">
                <a onClick={async () => {
                    await getImportantTasks()
                }} className="tab text-teal-600 hover:text-orange-400 hover:bg-gray-200 rounded">Important</a>
                <a onClick={async () => {
                    await getCompletedTasks()
                }} className="tab tab-active text-teal-600 hover:text-orange-400 hover:bg-gray-200 rounded">Completed Tasks</a>
                <a  onClick={async () => {
                    await getTaskData()
                }} className="tab text-teal-600 hover:text-orange-400 hover:bg-gray-200 rounded">All Tasks</a>

            </div>

            <div className="flex flex-col space-y-4 w-1/2 mx-auto border-4 border-teal-600 rounded-md mt-5 p-3">
                <input className="border-2 border-gray-500 text-center" onChange={handleTitle} type="text"
                       placeholder="Title"/>
                <input className="h-32 border-2 text-center" onChange={handleDescription} type="text"
                       placeholder="Description"/>
                <div className="flex justify-center space-x-2">
                    <p className="text-teal-600 text-lg">Private</p>
                    <input onClick={handlePrivacy} type="checkbox"/>
                </div>
                <div className="flex justify-center space-x-2 ">
                    <p className="text-teal-600 text-lg">Important</p>
                    <input onClick={handleImportant} type="checkbox"/>
                </div>

                <button className="font-bold text-white bg-teal-600 py-2 px-4 rounded-md hover:bg-teal-700"
                        onClick={async () => {
                            await addNewTask()
                        }}>CREATE TASK
                </button>
            </div>

            {allTaskData.map(task => <NewTaskCard key="id" {...task} />)}
            <form className="sticky bottom-0 right-0 ml-32">
                <button className="rounded-md bg-teal-600 text-white p-3">Refresh</button>
            </form>
        </div>
        </div>
    );
};

export default MainTaskPageB;