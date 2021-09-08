import React, {useState,} from 'react'
import { FaBars, FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa'
import '../Styles/Nav.css'


const Navbar = () => {


    const [list, setList] = useState(false)

    const handleClick = () => {
        setList(!list)
    }

    return(
<div className="Navbar-div">

    <h2 onClick={handleClick} className="menu-title"><FaBars /></h2>
    {
    list ? 
    <ul className = "Nav-list">
        <a href="https://github.com/ellriffs" >
    <li className="Github_Nav"><FaGithub /></li>
        </a>
        <a href="https://www.linkedin.com/in/elliot-robertson-b3940762/">
    <li className="Linkedin_Nav"><FaLinkedin /></li>
        </a>
        <a href="https://twitter.com/TheSourceCode6">
    <li className="Twitter_Nav"><FaTwitter /></li>
    </a>
    <li className="Gmail"><FaMailBulk /></li>
    </ul>
    : null
    }
</div>
    )
}

export default Navbar;