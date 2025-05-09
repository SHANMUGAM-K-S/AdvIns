import React from 'react';
import i1 from './assets/AutomotivePageImages/planning.avif';
import i2 from './assets/AutomotivePageImages/layout.png'
import i3 from './assets//AutomotivePageImages/designAndDrafting.jpg';
import i4 from './assets/AutomotivePageImages/robotics.png';
import i5 from './assets/AutomotivePageImages/documents.jpg';
import './Services.css';
import './Auto.css'
import auto from '../JsonFiles/Automotive.json'

function AutomotiveServices() {
    return (
        <div className='margins'>
            <div className="header">
                <h1>{auto.heading}</h1>
            </div>

            <div className="container">
                <section id="planning">
                    <img src={i1} alt="Planning" />
                    <h1>{auto.planning['sub-head']}</h1>
                    <p>{auto.planning['sub-service']}<br /> {auto.planning['sub-service2']}<br /> {auto.planning['sub-service3']} <br /> {auto.planning['sub-service4']} <br /> {auto.planning['sub-service5']} <br /> {auto.planning['sub-service6']}</p>
                </section>

                <section id="layouts">
                    <img src={i2} alt="Layouts" />
                    <h1>{auto.layouts['sub-head']}</h1>
                    <p>{auto.layouts['sub-service']} {auto.layouts['sub-service2']}</p>
                </section>

                <section id="design-drafting">
                    <img src={i3} alt="Design and Drafting" />
                    <h1>{auto.designing['sub-head']}</h1>
                    <p>{auto.designing['sub-service']}<br /> {auto.designing['sub-service2']} <br /> {auto.designing['sub-service3']}<br /> {auto.designing['sub-service4']}<br />{auto.designing['sub-service5']} <br /> {auto.designing['sub-service6']} <br />{auto.designing['sub-service7']} <br /> {auto.designing['sub-service8']} </p>
                </section>

                <section id="robotic-simulation">
                    <img src={i4} alt="Robotic Simulation" />
                    <h1>{auto.robotic['sub-head']}</h1>
                    <p>{auto.robotic['sub-service']} <br />{auto.robotic['sub-service2']} <br /> {auto.robotic['sub-service3']} <br /> {auto.robotic['sub-service4']} <br /> {auto.robotic['sub-service5']} <br />{auto.robotic['sub-service6']} <br /> {auto.robotic['sub-service7']} <br />{auto.robotic['sub-service8']}</p>
                </section>

                <section id="documents">
                    <img src={i5} alt="Documents" />
                    <h1>{auto.document['sub-head']}</h1>
                    <p>{auto.document['sub-service']} <br />{auto.document['sub-service2']}  <br /> {auto.document['sub-service3']}  <br />{auto.document['sub-service4']}  <br /> {auto.document['sub-service5']}  <br />{auto.document['sub-service6']}  <br /> {auto.document['sub-service7']}  <br /> {auto.document['sub-service8']}  <br /> {auto.document['sub-service9']} </p>
                </section>
            </div>
            <div >
                <button className="buttonssss" onClick={() => { document.documentElement.scrollTop = 0; }}>↑</button>
            </div>
        </div>
    );
}

export default AutomotiveServices;