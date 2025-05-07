import React from "react";
// import img2 from './assets/web.jpg'
// import img3 from './assets/softwareservices.jpg'
import './SoftwareServices.css'

function SoftwareServices() {

    return (
        <>
            <div className="container1">
                <section id="web">
                    <img src='ima' alt="Web Development" />
                    <h1>Web Development</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adip accusantium illum quos animi obcaecati quae iste voluptatibus?</p>
                </section>

                <section id="software">
                    <img src='{img3}' alt="Software Services" />
                    <h1>Software Services</h1>
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