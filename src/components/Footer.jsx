import React, { useEffect, useRef } from "react";
import './Footer.css'
import { useNavigate } from "react-router-dom";
import footer from '../JsonFiles/Footer.json'
import contacts from '../JsonFiles/Contact.json'
import nav from "../JsonFiles/Navbar.json"

const Footer = () => {
    const footerRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            { threshold: 0.1 }
        );
        const footerElement = footerRef.current;
        if (footerElement) observer.observe(footerElement);
        return () => {
            if (footerElement) observer.unobserve(footerElement);
        };
    }, []);
    function home() {
        navigate('/')
    }
    function service() {
        navigate('/service')
    }
    function career() {
        navigate('/career')
    }
    function contact() {
        navigate('/contact')
    }

    return (
        <div className='foot'>
            <div className="footer" ref={footerRef}>


                <div className="f2">
                    <h2>{footer.address} :</h2>
                    <p>{contacts.companyAddress.addressLine1},<br />{contacts.companyAddress.addressLine2}<br /> {contacts.companyAddress.addressLine3} <br /> {contacts.companyAddress.addressLine4} </p>
                </div>

                <div className="f3">
                    <ul>

                        <li><a href="#" onClick={home}>{nav.home}</a></li>
                        <li><a href="#" onClick={service}>{nav.services}</a></li>
                        <li><a href="#" onClick={career}>{nav.careers}</a></li>
                        <li><a href="#" onClick={contact}>{nav.contact} Us</a></li>
                    </ul>
                </div>
                <div className="f6">
                    <h2>Follow Us :</h2>
                    <a href={footer.linkedin}> <i className="fab fa-linkedin-in" ></i></a>
                    {/* <i className="fab fa-linkedin-in" onClick={linkedin}></i> */}
                </div>


            </div>
            <hr />
            <div className="f5">
                <h2>{footer.copyright}</h2>
            </div>
        </div>
    )
}

export default Footer