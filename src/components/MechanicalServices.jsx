import img2 from './assets/MechServicePageImages/Automotive2.png'
import img3 from './assets/MechServicePageImages/Automation.jpeg.jpg'
import img4 from './assets/MechServicePageImages/cad.jpg'
import img5 from './assets/MechServicePageImages/manufacturing.webp'
import img6 from './assets/MechServicePageImages/img6.jpg'
import img7 from './assets/MechServicePageImages/SPM.jpg'
import img8 from './assets/MechServicePageImages/Pneumatic.png'
import './Services.css'
import { useNavigate } from 'react-router-dom'
import mech from '../JsonFiles/MechServices.json'

function MechanicalServices() {

    const navigate = useNavigate()


    function handleCLick() {
        navigate('/AutomotiveServices')
    }

    return (
        <div className='margins'>
            <div className="header">
                <h1>{mech.header}</h1>
            </div>

            <div className="container">
                <section id="automotive">
                    <img src={img2} alt="Automotive" />
                    <h1>{mech.automotive['sub-head']}</h1>
                    <p>{mech.automotive['sub-service']} <br /> {mech.automotive['sub-service2']}  <br />{mech.automotive['sub-service3']}  <br /> {mech.automotive['sub-service4']} <br /> {mech.automotive['sub-service5']}</p>
                    <button onClick={handleCLick} >{mech.automotive.button}</button>
                </section>

                <section id="automation">
                    <img src={img3} alt="Automation" />
                    <h1>{mech.automation['sub-head']}</h1>
                    <p>{mech.automation['sub-service']} <br /> {mech.automation['sub-service2']}<br /> {mech.automation['sub-service3']}</p>
                </section>

                <section id="cad-services">
                    <img src={img4} alt="CAD Services" />
                    <h1>{mech.cad['sub-head']}</h1>
                    <p>{mech.cad['sub-service']} <br /> {mech.cad['sub-service2']} <br /> {mech.cad['sub-service3']}</p>
                </section>

                <section id="manufacturing">
                    <img src={img5} alt="Manufacturing" />
                    <h1>{mech.manufacturing['sub-head']}</h1>
                    <p>{mech.manufacturing['sub-service']}<br /> {mech.manufacturing['sub-service2']}<br /> {mech.manufacturing['sub-service3']}</p>
                </section>

                <section id="system-integration">
                    <img src={img6} alt="System Integration" />
                    <h1>{mech.system['sub-head']}</h1>
                    <p>{mech.system['sub-service']} </p>
                </section>

                <section id="spclPurposeMachines">
                    <img src={img7} alt="Special Purpose Machines" />
                    <h1>{mech.SPM['sub-head']}</h1>
                    <p>{mech.SPM['sub-service']}</p>
                </section>

                <section id="pneumatics">
                    <img src={img8} alt="Pneaumatics" />
                    <h1>{mech.Pnea['sub-head']}</h1>
                    <p>{mech.Pnea['sub-service']}</p>
                </section>

            </div>
            <div >
                <button className="buttonsss" onClick={() => { document.documentElement.scrollTop = 0; }}>↑</button>
            </div>
        </div>
    )
}

export default MechanicalServices