import img2 from './assets/Automotive2.png'
import img3 from './assets/Automation.jpeg.jpg'
// import img4 from './assets/cad.jpg'
import img5 from './assets/manufacturing.webp'
import img6 from './assets/img6.jpg'
import img7 from './assets/SPM.jpg'
import img8 from './assets/Pneumatic.png'
import './Services.css'
import { useNavigate } from 'react-router-dom'

function MechanicalServices() {

    const navigate = useNavigate()


    function handleCLick() {
        navigate('/AutomotiveServices')
    }

    return (
        <div className='margins'>
            <div className="header">
                <h1>Mechanical Industry</h1>
            </div>

            <div className="container">
                <section id="automotive">
                    <img src={img2} alt="Automotive" />
                    <h1>Automotive</h1>
                    <p>BIW Line Engineering <br /> Process Planning <br /> Design & Detailing <br /> Robotic Simulation <br /> Documents</p>
                    <button onClick={handleCLick} >View More</button>
                </section>

                <section id="automation">
                    <img src={img3} alt="Automation" />
                    <h1>Automation</h1>
                    <p>SPM (Special Purpose Machines) <br /> Assembly Automation <br /> Robotics</p>
                </section>

                <section id="cad-services">
                    <img src="{img4}" alt="CAD Services" />
                    <h1>CAD Services</h1>
                    <p>2D-3D Conversions <br /> Drafting Services <br /> CAD Customization</p>
                </section>

                <section id="manufacturing">
                    <img src={img5} alt="Manufacturing" />
                    <h1>Manufacturing</h1>
                    <p>Contract Manufacturing <br /> Spare Parts Manufacturing <br /> Fixtures, Grippers etc...</p>
                </section>

                <section id="system-integration">
                    <img src={img6} alt="System Integration" />
                    <h1>System Integration</h1>
                    <p>Unique Offering & Application Specific <br /> Solutions</p>
                </section>

                <section id="spclPurposeMachines">
                    <img src={img7} alt="Special Purpose Machines" />
                    <h1>Special Purpose Machines</h1>
                    <p>Unique Offering & Application Specific Solutions</p>
                </section>

                <section id="pneumatics">
                    <img src={img8} alt="Pneaumatics" />
                    <h1>Pneaumatics</h1>
                    <p>Unique Offering & Application Specific Solutions</p>
                </section>

            </div>
            <div >
                <button className="buttonsss" onClick={() => { document.documentElement.scrollTop = 0; }}>↑</button>
            </div>
        </div>
    )
}

export default MechanicalServices