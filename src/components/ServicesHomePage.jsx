import React, { useState } from "react";
import './ServicesHomePage.css'
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function ServiceHomePage() {

    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        event.stopPropagation(); // Prevents unwanted event propagation
        setShowDropdown(prevState => !prevState);
    };

    function handleClick1() {
        navigate('/MechanicalServices')
    }

    function handleClick2() {
        navigate('/SoftwareServices')
    }
    function auto() {
        navigate('/AutomotiveServices')
    }
    return (
        <>
            <div className="container2">
                <div className="btn1">
                    <button onClick={handleClick1}>Mechanical Services</button>
                </div>
                <div className="btn2">

                    <button onClick={handleClick2}>Software Services</button>
                </div>
            </div>


            <div className="drop" >
                <button id="buttons" className="dropbtn" onClick={toggleDropdown}><RxHamburgerMenu className="software-hamburger" /></button>
                {showDropdown && (<div className="dropdown-content" onClick={(e) => e.stopPropagation()}>

                    <ul className="ul">
                        <li><a href="#" onClick={handleClick1}>Mechanical</a></li>

                        <li><a href="#" onClick={auto}>Automotive</a></li>
                        <li><a href="#"  >Automation</a></li>
                        <li><a href="#">CAD Services</a></li>
                        <li><a href="#">Manufacturing</a></li>
                        <li><a href="#">System Integration</a></li>
                        <li><a href="#" >Special Purpose Machines</a></li>
                        <li><a href="#" >Pneaumatics</a></li>


                        <li><a href="#" onClick={handleClick2}>Software</a></li>

                        <li><a href="#" >Web Development</a></li>
                        <li><a href="#">Software Services</a></li>

                    </ul>
                    {/* <a href="#" onClick={handleClick1}>Mechanical</a>
<a href="#" onClick={handleClick2}>Software</a> */}

                </div>)}
            </div>
        </>
    )
}

export default ServiceHomePage