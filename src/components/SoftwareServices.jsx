import React from "react";
import img2 from './assets/SoftwarePageImages/WebDevelopment.jpg'
import img3 from './assets/SoftwarePageImages/SASS.jpg'
import './SoftwareServices.css'
import software from '../JsonFiles/SoftwareServices.json'

function SoftwareServices() {

    return (
        <>
            <div className="container1">
                <section id="web">
                    <img src={img2} alt="Web Development" />
                    <h1>{software.webdev["sub-head"]}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adip accusantium illum quos animi obcaecati quae iste voluptatibus?</p>
                </section>

                <section id="software">
                    <img src={img3} alt="Software Services" />
                    <h1>{software.software["sub-head"]}</h1>
                    <p>Lorem ipsum dolor sit,  tene, repellat omnis. Recusandae aliquam accusantium illum quos animi obcaecati quae iste voluptatibus?</p>
                </section>
            </div>
            <div >
                <button className="buttonsss" onClick={() => { document.documentElement.scrollTop = 0; }}>↑</button>
            </div>
        </>
    )
}

export default SoftwareServices