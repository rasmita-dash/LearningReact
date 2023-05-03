import {Logo_URL} from "../utils/constants";
import { NavLink } from "react-router-dom";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About Us</NavLink></li>
                    <li><NavLink to="contact">Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;