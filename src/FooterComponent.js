import React from 'react';

const FooterComponent = () => {
    return (
        <div>
            <div className=" flex items-center justify-center space-x-4 font-bold text-lg text-teal-500 p-4 primary-content text-base-content">
                <a href="#" className="text-teal-600 text-lg hover:text-teal-700">About</a>
                <a href="#" className="text-teal-600 text-lg hover:text-teal-700">Contact</a>
                <a href="#" className="text-teal-600 text-lg hover:text-teal-700">Team</a>
            </div>
            <div className="footer footer-center p-4 primary-content text-base-content">
                <p>Copyright © 2022 - All right reserved by Team-algo</p>
            </div>
        </div>
    );
};

export default FooterComponent;