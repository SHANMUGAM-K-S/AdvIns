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
                        <li><a href="#" className="headings" onClick={handleClick1} >Mechanical</a></li>

                        <li><a href="#" className="sub-headings" onClick={auto} >Automotive</a></li>
                        <li><a href="#" className="sub-headings"  >Automation</a></li>
                        <li><a href="#" className="sub-headings">CAD Services</a></li>
                        <li><a href="#" className="sub-headings" >Manufacturing</a></li>
                        <li><a href="#" className="sub-headings" >System Integration</a></li>
                        <li><a href="#" className="sub-headings" >Special Purpose Machines</a></li>
                        <li><a href="#" className="sub-headings" >Pneaumatics</a></li>


                        <li><a href="#" onClick={handleClick2} className="headings"  >Software</a></li>

                        <li><a href="#" className="sub-headings">Web Development</a></li>
                        <li><a href="#" className="sub-headings" >Software Services</a></li>

                    </ul>
                </div>)}
            </div>
        </>
    )
}

export default ServiceHomePage