import React from 'react';

//The properties in this card will be determined by that pulled from the API, This is not meant to replace
//current work on the task card but to start getting some of the logic in place
const TaskCardB = ({title, description, privacy,id}) => {

    const deleteTask = async () => {



        const response = await fetch(`https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?id=eq.${id}`, {
            method:"DELETE",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",

            },
            //body: JSON.stringify(newUser)


        });
        //const result = await response.json()
        //setAllTaskData(result)
        //console.log(result)
        //return result


    }




    return (
        <div>
            <h1 className="justify-center flex mr-96">{title}</h1>
            <div className="flex items-center justify-center">
                <p>{privacy}</p>
                <div className="flex border w-1/3 h-24 bg-gray-100">

                    <div>
                        <p className="mt-8 ml-3">{description}</p>
                    </div>
                    <p onClick={async () => {await deleteTask()}}>Delete</p>
                </div>
                <input type="checkbox"/>
            </div>

        </div>
    );
};

export default TaskCardB;