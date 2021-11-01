import {useState} from "react";
import { SiGooglelens } from 'react-icons/si';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import "../index.css";

const Navbar = () => {

    const [search, setSearch] = useState("");

    const searchValue = (e) => {
        setSearch(e.target.value);
    }

    return(
        <div className="Main-container">
            <div className="navbar">
                <div className="logo container">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
                    <div className="logo-slogns">
                        <h3>Unsplash</h3>
                        <p>Photos for everyone</p>
                    </div>
                </div>
                <div className="search container">
                    <AiOutlineSearch  size={20} className="SearchIcon"/>
                    <input type="text" placeholder="Search" value={search} onChange={searchValue}/>
                    <SiGooglelens size={18} className="lens"/>
                </div>
                <div className="Side-menu container">
                    <p>Brands</p>
                    <div className="Awards">
                        <img src={`${process.env.PUBLIC_URL}/images/trophy.png`} alt="logo" />                 
                        <p>Unsplash Awards</p>
                    </div>
                    <p>Log in</p>
                    <button className="photo-btn">Submit a photo</button>
                    <div><GiHamburgerMenu size={20} className="Hamburger"/></div>
                </div>
            </div>

            <div className="subMenu">
                <ul>
                    <li className="active">Editorial</li>
                    <li>3D Renders</li>
                    <li>Architecture & Interior</li>
                    <li>Current Events</li>
                    <li>Experimental</li>
                    <li>Fashion</li>
                    <li>Film</li>
                    <li>Food & Drink</li>
                    <li>Health & Wellness</li>
                    <li>Nature</li>
                    <li>People</li>
                    <li>Street Photography</li>
                </ul>
            </div>
        </div>
    )  
}

export default Navbar;