import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";
import image from "./images/linkedin-svgrepo-com.svg";
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

const SignUpForm = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const USER_DATA_API_URL = "https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/UsersB"


    const handlePassInput = (event) => {
        setPassword(event.target.value)
    }
    const handleNameInput = (event) => {

        setName(event.target.value)



    }
    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const addNewUser = async () => {

        const newUser = [{name:name, email:email, password:password}]

        const response = await fetch(USER_DATA_API_URL, {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",

            },
            body: JSON.stringify(newUser)


        });
        //const result = await response.json()
        //setAllTaskData(result)
        //console.log(result)
        //return result


    }





    return (<div>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl">
                <h1 className="text-4xl text-center text-teal-600 font-medium">Sign Up</h1>
                <p className="text-orange-400 text-center">Hi, Sign Up Below 👋</p>

                <div className="my-5">
                    <button
                        className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-xl text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="Google Logo"/> <span>Sign up with Google</span>
                    </button>
                </div>
                <div className="my-5">
                    <button
                        className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-xl text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src={image} className="w-7 h-7" alt="linkedIn logo"/> <span>Sign up with LinkedIn</span>
                    </button>
                </div>
                <form action="" className="my-10">
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="fname">

                            <input id="fname" name="fname" type="text"
                                   className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                                   placeholder="Enter Your name" onChange={handleNameInput}/>
                        </label>
                        <label htmlFor="email">

                            <input id="email" name="email" type="email"
                                   className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                                   placeholder="Enter email address" onChange={handleEmailInput}/>
                        </label>
                        <label htmlFor="password">

                            <input id="password" name="password" type="password"
                                   className="w-full py-3 border border-slate-200 rounded-xl px-3 focus:outline-none focus:border-slate-500 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                                   placeholder="Enter your password" onChange={handlePassInput}/>
                        </label>
                        <div className="flex flex-row justify-between">
                            <div>
                                <label htmlFor="remember" className="text-teal-600">

                                </label>
                            </div>
                            <div>

                            </div>
                        </div>
                        <button onClick={async () => {await addNewUser()}}
                            className="w-full py-3 font-medium text-white bg-teal-600 hover:bg-teal-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor"
                                 strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                            </svg>
                            <span>Sign Up</span>
                        </button>
                        <p className="text-center"> <Link to="/loginpage"
                                                                          className="text-orange-400 font-medium inline-flex space-x-1 items-center"><span>Register here</span><span><svg
                            xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg></span></Link></p>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SignUpForm



