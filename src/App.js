import './index.css';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";



import {Outlet} from "react-router-dom";
import NewTaskCard from "./NewTaskCard";
import MainTaskPageB from "./MainTaskPageB";
import LogInForm from "./LogInForm";


function App() {
    return (<div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>


        </div>

    );
}

export default App;
