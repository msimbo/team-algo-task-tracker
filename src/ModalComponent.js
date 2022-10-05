import React from 'react';

const ModalComponent = () => {
    return (
        <div>
            {/*The button to open modal */}
            <div className="flex justify-center items-center">
                <label htmlFor="my-modal" className=" text-white m-4  py-2 px-4 text-lg bg-teal-600">Create Task</label>
            </div>
            {/*Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="flex flex-col">

                        <input type="text"  placeholder="Enter the task title" className="mb-2 outline-0 font-bold text-lg"/>

                        {/*<p className="py-4">You've been selectse Wikipedia for free!</p>*/}

                        <input type="text" placeholder="Task description" className=" outline-0 py-4"/>

                    </div>


                    <div className=" flex justify-between modal-action">
                        <div className="py-2 px-4">
                            <input type="checkbox" className="w-4 h-4"/><span className="font-bold ml-1">Private</span>
                        </div>
                        <div className="">
                            <ul className="menu-horizontal space-x-4">
                                <li className="font-bold text-black py-2 px-4  hover:text-teal-700 hover:border-teal-700"><a href="{}">Cancel</a>
                                </li>
                                <li className="font-bold text-white bg-teal-600 py-2 px-4 rounded-full hover:bg-teal-700"><a href="{}">Save task</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModalComponent;