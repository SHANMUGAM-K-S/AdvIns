import React, { useEffect, useRef, useState } from "react";
import "./Home.css"; import frontImage from './assets/HomePageImages/HomePage-front.avif';
import aboutImage from './assets/HomePageImages/About-Image.avif'
import about from "../JsonFiles/AboutSection.json"


const Section2 = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const engineerRefTop = useRef(null);
    const engineerRefBottom = useRef(null);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        setVisible(true);
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

        const textElement = textRef.current;
        const imageElement = imageRef.current;
        const engineerElementTop = engineerRefTop.current;
        const engineerElementBottom = engineerRefBottom.current;


        if (textElement) observer.observe(textElement);
        if (imageElement) observer.observe(imageElement);
        if (engineerElementTop) observer.observe(engineerElementTop);
        if (engineerElementBottom) observer.observe(engineerElementBottom);



        return () => {
            if (textElement) observer.unobserve(textElement);
            if (imageElement) observer.unobserve(imageElement);
            if (engineerElementTop) observer.unobserve(engineerElementTop);
            if (engineerElementBottom) observer.unobserve(engineerElementBottom);

        };
    }, []);

    return (
        <div className="">
            <div className={visible ? "page-enter-active" : "page-enter"}>
                {/* background image section */}
                <div className="intro">
                    <img src={frontImage} alt="" />
                </div>
                <div className="texts">
                    {/* Heading  */}
                    <h1 className={`text-image-mask `}>{about.title}</h1>
                </div>
                <div className="about-section">
                    <div className="text-section" ref={textRef}>
                        {/* About left side text Section */}
                        <h3> {about.subtitle}</h3>
                        <p>
                            <strong>{about.companyName}</strong> {about.companyPara1} </p>
                        <p>{about.companyPara2} </p>
                        <p>{about.companyPara3}   </p>
                    </div>
                    <div className="image-section">
                        <div className="in">
                            {/* About rightside image section */}
                            <img src={aboutImage} alt="image" />
                        </div>
                    </div>
                </div>
                <div className="our-team">
                    <div className="about-team">
                        <div className="team">
                            {/* Our Team Section */}
                            {/* <h1>{about.team}</h1>
                            <p>{about.teamPara}</p> */}
                        </div>
                        {/* Left side container section */}
                        <div className="experts">
                            <div className="expertise">
                                <h3>{about.experts} </h3>
                                <img src={about.images.expertsImage} alt="" />

                                <p className="para1">{about.expertsPara}</p>
                            </div>
                            <hr />
                            {/* Right side container section */}
                            <div className="expertises">
                                <h3>{about.visionmission}</h3>
                                <img src={about.images.visionImage} alt="" />
                                <p className="para2"> <strong>Vision</strong> – {about.visionPara}
                                    <br /><br />
                                    <strong>   Mission</strong> – {about.missionPara} </p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div >
                {/* scroll to top button */}
                <button className="buttonn" onClick={() => { document.documentElement.scrollTop = 0; }}>↑</button>
            </div>
        </div>
    );
};

export default Section2;
