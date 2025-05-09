import logo from './assets/Logo/Logo.avif'
import React, { useState, useEffect, useRef } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import "./Nav.css"; import { useLocation } from "react-router-dom";
import nav from "../JsonFiles/Navbar.json"

import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const navRef = useRef(null);
    const location = useLocation();

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Django.pdf";
        // link.download = "Catalogue.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setClicked(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    const handleNavigation = (path) => {
        navigate(path);
        setClicked(false);
        setTimeout(() => {
            document.documentElement.scrollTop = 0;
        }, 100);
    };

    const styles = {
        fontSize: '14px',
        whiteSpace: 'nowrap'
    }
    const style = {
        fontSize: '12px', whiteSpace: 'nowrap', margin: '-30px', color: 'gray',
    }
    return (
        <div className="nav" >
            <nav ref={navRef}>
                <img
                    src={logo}
                    alt="Logo" onClick={() => handleNavigation("/")}
                />

                <div className={clicked ? "nav-menu active" : "nav-menu"}>
                    <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
                        {location.pathname !== "/" && <li><a onClick={() => handleNavigation("/")}>{nav.home}</a></li>}
                        <li className="dropdown">
                            <a href="#" onClick={() => handleNavigation('/service')} >{nav.services}</a>
                            <ul className="dropdown-menu ">
                                <li className="dropdowns"><a style={styles} onClick={() => handleNavigation("/MechanicalServices")}>{nav.dropdowns.mechanical}</a>
                                    <hr />
                                    <ul className="dropdown-menus">
                                        <li><a href="#" onClick={() => handleNavigation("/AutomotiveServices")} style={{ fontSize: '12px', whiteSpace: 'nowrap', margin: '-30px', }}>{nav.dropdowns.automotive}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.automation}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.cad}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.manufacture}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.system}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.spm}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.pnea}</a></li>
                                    </ul>
                                </li>
                                <li className="software"><a style={styles} onClick={() => handleNavigation("/SoftwareServices")}>{nav.softwareservices.software}</a>
                                    <hr />

                                    <ul className="softwares">
                                        <li><a href="#" style={style}>{nav.softwareservices.web}</a></li>
                                        <li><a href="#" style={style}>{nav.softwareservices.software}</a></li>

                                    </ul>
                                </li>

                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" onClick={() => handleNavigation('/service')} >{nav.catalogues}</a>
                            <ul className="dropdown-menu ">
                                <li className="dropdowns"><a target="_blank" style={styles} onClick={handleDownload} >{nav.dropdowns.mechanical}</a>
                                    <hr />
                                    <ul className="dropdown-menus">
                                        <li><a href="#" style={{ fontSize: '12px', whiteSpace: 'nowrap', margin: '-30px', }}>{nav.dropdowns.automotive}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.automation}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.cad}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.manufacture}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.system}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.spm}</a></li>
                                        <li><a href="#" style={style}>{nav.dropdowns.pnea}</a></li>
                                    </ul>
                                </li>
                                <li className="software"><a style={styles} onClick={() => handleNavigation("/SoftwareServices")}>{nav.softwareservices.software}</a>
                                    <hr />

                                    <ul className="softwares">
                                        <li><a href="#" style={style}>{nav.softwareservices.web}</a></li>
                                        <li><a href="#" style={style}>{nav.softwareservices.software}</a></li>

                                    </ul>
                                </li>

                            </ul>
                        </li>
                        <li><a onClick={() => handleNavigation("/career")}>{nav.careers}</a></li>

                        <li><a onClick={() => handleNavigation("/contact")}>{nav.contact}</a></li>
                        <li><a onClick={() => handleNavigation("/admin")}><IoPersonCircleOutline style={{ fontSize: '25px', paddingTop: '5px' }} />
                        </a></li>
                    </ul>
                </div>

                <div id="mobile" onClick={handleClick}>
                    <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
