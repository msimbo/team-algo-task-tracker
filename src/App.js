import './index.css';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";


import {Outlet} from "react-router-dom";


function App() {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>

    );
}

export default App;
