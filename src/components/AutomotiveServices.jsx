import React from 'react';
import i1 from './assets/planning.avif';
import i2 from './assets/layout.png';
import i3 from './assets/designAndDrafting.jpg';
import i4 from './assets/robotics.png';
import i5 from './assets/documents.jpg';
import './Services.css';
import './Auto.css'

function AutomotiveServices() {
    return (
        <div className='margins'>
            <div className="header">
                <h1>Automotive Services</h1>
            </div>

            <div className="container">
                <section id="planning">
                    <img src={i1} alt="Planning" />
                    <h1>Planning</h1>
                    <p>Process Planning <br /> Layout Design <br /> Cycle Time <br /> Process Documents <br /> Weld Gun Study <br /> Ergonomic Study</p>
                </section>

                <section id="layouts">
                    <img src={i2} alt="Layouts" />
                    <h1>Layouts</h1>
                    <p>SPM (Special Purpose Machines) Assembly Automation Robotics</p>
                </section>

                <section id="design-drafting">
                    <img src={i3} alt="Design and Drafting" />
                    <h1>Design and Drafting</h1>
                    <p>Geo & Re-Spot Fixtures <br /> Hemming Fixtures <br /> Checking Fixtures <br /> Arc/Lase Welding Fixtures <br /> Material Handling / End Effectors / <br /> Combo Grippers <br /> Conveyor & Pallet <br /> Miscellaneous Fixtures (Pedestal, Glue Stand, Passtable etc...)</p>
                </section>

                <section id="robotic-simulation">
                    <img src={i4} alt="Robotic Simulation" />
                    <h1>Robotic Simulation</h1>
                    <p>Cell Building <br /> Weld Points & product data importing <br /> Weld Gun Selections <br /> Robotic Reach Study <br /> Tool Validation <br /> Kinematics <br /> SOP (Sequence Of Operation) <br /> OLP (Off-Line Programming)</p>
                </section>

                <section id="documents">
                    <img src={i5} alt="Documents" />
                    <h1>Documents</h1>
                    <p>Validation (Clamp, Gripper, Turntable etc...) <br /> Cycle Time & Spot Plan Creation <br /> Pneumatic Drawings <br /> Sequence Sheet <br /> PLP Plan & SHIM Plan <br /> Panel Flor / Joining Process <br /> Ergo Documents <br /> Poka-Yoke <br /> Long Lead / BOP</p>
                </section>
            </div>
            <div >
                <button className="buttonssss" onClick={() => { document.documentElement.scrollTop = 0; }}>↑</button>
            </div>
        </div>
    );
}

export default AutomotiveServices;