
import {NavLink} from 'react-router-dom';

const Header=()=>{
return (
    <div className="header">
        <div className="logo-container">
        </div>
        <div className="nav-items">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="emi-calculator">EMI Calculator</NavLink></li>
                <li><NavLink to="timer">Timer</NavLink></li>
                <li><NavLink to="click-counter">Click Counter</NavLink></li>
            </ul>
        </div>
    </div>
    )
}
export default Header;