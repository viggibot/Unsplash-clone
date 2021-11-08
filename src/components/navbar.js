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
                        <div className="award-names">
                            <p>Unsplash</p>
                            <p>Awards</p>
                        </div>
                    </div>
                    <p>Log in</p>
                    <button className="photo-btn">Submit a photo</button>
                    <div className="Ham-box"><GiHamburgerMenu size={20} className="Hamburger"/></div>
                </div>
            </div>

            <div className="subMenu">
                <span className="active">Editorial</span>
                <span>3D Renders</span>
                <span>Current Events</span>
                <span>Experimental</span>
                <span>Fashion</span>
                <span>Film</span>
                <span>Food & Drink</span>
                <span>Health & Wellness</span>
                <span>Nature</span>
                <span>People</span>
                <span>Street Photography</span>
            </div>
        </div>
    )  
}

export default Navbar;