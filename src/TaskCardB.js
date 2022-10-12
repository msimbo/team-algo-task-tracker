import React from 'react';
import * as PropTypes from "prop-types";

function TaskItem({task,deleteTask}) {
    return;
}

TaskItem.propTypes = {deleteTask: PropTypes.func};
const TaskCardB = ({title, description, privacy,id}) => {

    const deleteTask = async () => {



        const response = await fetch(`https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?id=eq.${id}`, {
            method:"DELETE",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",

            },


        });


    }


    let task;
    return (
        <div>
            <h1 className="justify-center flex mr-96">{title}</h1>
            <div className="flex items-center justify-center">
                <p>{privacy}</p>
                <div className="flex border w-1/3 h-24 bg-gray-100">

                    <div>
                        <p className="mt-8 ml-3">{description}</p>
                    </div>
                    {/*<p onClick={async () => {await deleteTask()}}>Delete</p>*/}
                    {/* FIRST ATTEMPT AT MAPPING the DELETE */}
                    {task.map(task => ( <TaskItem task={task} deleteTask={deleteTask}/>
                    ))}
                </div>
                <input type="checkbox"/>
            </div>

        </div>
    );
};

export default TaskCardB;


{/*const deleteTasks = async (taskId)  => {

    const { data, error } = await supabase
            .from('services')
            .delete()
            .eq('id', taskId)

const getAllTasks = await getTasks()

    setTasks(getAllTasks)

    const getTasks = async () => {

        let {data: services, error} = await supabase
            .from('services')
    );
    }*/}