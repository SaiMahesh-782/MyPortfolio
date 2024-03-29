
import Logo from "./images/logo.png"
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <div className="header">
        <div className="logos">
            <img src={Logo}
            alt="" />
        </div>
        <div className="right-align">
            <ul>
            <Link className="Link" to="/">
            <li >Home</li>
            </Link>
            <Link className="Link" to="/About">
            <li >About</li>
            </Link>
            <Link className="Link" to="/Projects">
            <li >Projects</li>
            </Link>
            <Link className="Link" to="/Contact">
            <li >Contact</li>
            </Link>
            <Link className="Link" to="https://drive.google.com/file/d/1neAN0K72Q95aoVTcC20WpZPHVBhkfB5I/view?usp=sharing">
            <li >Resume</li>
            </Link>
            </ul>
        </div>
        </div>
        </>
    );
}
export default Navbar
