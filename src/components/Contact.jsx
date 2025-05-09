import React, { useState } from 'react'
import './Contact.css'
import { ValidationError } from '@formspree/react';
import axios from "axios";
import 'react-phone-number-input/style.css';
import frontImg from './assets/ContactPageImages/Contact-us-Front.jpg'
import contact from '../JsonFiles/Contact.json'


const Contact = ({ recipientEmail }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        file: null
    });
    const handlePhoneChange = (e) => {
        const updatedPhone = e.target.value;
        setPhoneNumber(updatedPhone);
        setFormData({ ...formData, phone: `${countryCode}- ${updatedPhone}` });
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        Object.keys(formData).forEach(key => {
            formDataObj.append(key, formData[key]);
        });
        formDataObj.append("recipientEmail", recipientEmail);
        try {
            await axios.post("http://localhost:5000/jobs/send-email", formDataObj, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Form submitted successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                file: null
            });

            setPhoneNumber("");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };
    return (
        <div >
            <div className='contac'>
                <div className="contact-page">
                    <div className="contact-us">
                        <img src={frontImg} alt="" />
                    </div>

                </div>

                <div className="contacts">
                    <div className="office">
                        <h2>{contact.companyName}</h2>
                        <p>{contact.companyAddress.addressLine1} <br /> {contact.companyAddress.addressLine2} <br /> {contact.companyAddress.addressLine3} <br /> {contact.companyAddress.addressLine4} </p>
                        <div className="business">
                            <h4>{contact.businessContact}</h4>
                            <a target='_blank' href={contact.emailContact}>{contact.businessEmail}</a>
                        </div>

                    </div>
                    <div className="cnts">
                        <h1>CONTACT INFO </h1>

                        <form onSubmit={handleSubmit} >
                            <input type="text" id='text' name='name' value={formData.name} onChange={handleChange} placeholder='Firstname' />
                            <ValidationError
                                prefix="Text"
                                field="Name"

                            />
                            <br />
                            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='EMail Address' />
                            <ValidationError
                                prefix="Email"
                                field="E-mail"

                            />
                            <br />
                            <select className='select' onChange={(e) => {
                                const newCountryCode = e.target.value;
                                setCountryCode(newCountryCode);
                                setFormData({ ...formData, phone: `${newCountryCode}-${phoneNumber}` });
                            }}>
                                <option value="+">select</option>
                                <option value="+91">+91 (India)</option>
                                <option value="+93">+93 (Afghanistan)</option>
                                <option value="+355">+355 (Albania)</option>
                                <option value="+213">+213 (Algeria)</option>
                                <option value="+376">+376 (Andorra)</option>
                                <option value="+244">+244 (Angola)</option>
                                <option value="+54">+54 (Argentina)</option>
                                <option value="+374">+374 (Armenia)</option>
                                <option value="+61">+61 (Australia)</option>
                                <option value="+43">+43 (Austria)</option>
                                <option value="+994">+994 (Azerbaijan)</option>
                                <option value="+973">+973 (Bahrain)</option>
                                <option value="+880">+880 (Bangladesh)</option>
                                <option value="+375">+375 (Belarus)</option>
                                <option value="+32">+32 (Belgium)</option>
                                <option value="+501">+501 (Belize)</option>
                                <option value="+229">+229 (Benin)</option>
                                <option value="+975">+975 (Bhutan)</option>
                                <option value="+591">+591 (Bolivia)</option>
                                <option value="+267">+267 (Botswana)</option>
                                <option value="+387">+387 (Bosnia and Herzegovina)</option>
                                <option value="+55">+55 (Brazil)</option>
                                <option value="+359">+359 (Bulgaria)</option>
                                <option value="+226">+226 (Burkina Faso)</option>
                                <option value="+257">+257 (Burundi)</option>
                                <option value="+855">+855 (Cambodia)</option>
                                <option value="+237">+237 (Cameroon)</option>
                                <option value="+1">+1 (Canada)</option>
                                <option value="+238">+238 (Cape Verde)</option>
                                <option value="+236">+236 (Central African Republic)</option>
                                <option value="+235">+235 (Chad)</option>
                                <option value="+56">+56 (Chile)</option>
                                <option value="+86">+86 (China)</option>
                                <option value="+57">+57 (Colombia)</option>
                                <option value="+269">+269 (Comoros)</option>
                                <option value="+506">+506 (Costa Rica)</option>
                                <option value="+385">+385 (Croatia)</option>
                                <option value="+357">+357 (Cyprus)</option>
                                <option value="+420">+420 (Czech Republic)</option>
                                <option value="+45">+45 (Denmark)</option>
                                <option value="+253">+253 (Djibouti)</option>
                                <option value="+593">+593 (Ecuador)</option>
                                <option value="+20">+20 (Egypt)</option>
                                <option value="+503">+503 (El Salvador)</option>
                                <option value="+240">+240 (Equatorial Guinea)</option>
                                <option value="+291">+291 (Eritrea)</option>
                                <option value="+372">+372 (Estonia)</option>
                                <option value="+251">+251 (Ethiopia)</option>
                                <option value="+679">+679 (Fiji)</option>
                                <option value="+358">+358 (Finland)</option>
                                <option value="+33">+33 (France)</option>
                                <option value="+241">+241 (Gabon)</option>
                                <option value="+220">+220 (Gambia)</option>
                                <option value="+995">+995 (Georgia)</option>
                                <option value="+49">+49 (Germany)</option>
                                <option value="+233">+233 (Ghana)</option>
                                <option value="+30">+30 (Greece)</option>
                                <option value="+299">+299 (Greenland)</option>
                                <option value="+1473">+1473 (Grenada)</option>
                                <option value="+502">+502 (Guatemala)</option>
                                <option value="+224">+224 (Guinea)</option>
                                <option value="+245">+245 (Guinea-Bissau)</option>
                                <option value="+592">+592 (Guyana)</option>
                                <option value="+509">+509 (Haiti)</option>
                                <option value="+504">+504 (Honduras)</option>
                                <option value="+36">+36 (Hungary)</option>
                                <option value="+354">+354 (Iceland)</option>
                                <option value="+62">+62 (Indonesia)</option>
                                <option value="+98">+98 (Iran)</option>
                                <option value="+964">+964 (Iraq)</option>
                                <option value="+353">+353 (Ireland)</option>
                                <option value="+972">+972 (Israel)</option>
                                <option value="+39">+39 (Italy)</option>
                                <option value="+225">+225 (Ivory Coast)</option>
                                <option value="+81">+81 (Japan)</option>
                                <option value="+1876">+1876 (Jamaica)</option>
                                <option value="+962">+962 (Jordan)</option>
                                <option value="+7">+7 (Kazakhstan)</option>
                                <option value="+254">+254 (Kenya)</option>
                                <option value="+686">+686 (Kiribati)</option>
                                <option value="+850">+850 (North Korea)</option>
                                <option value="+82">+82 (South Korea)</option>
                                <option value="+965">+965 (Kuwait)</option>
                                <option value="+996">+996 (Kyrgyzstan)</option>
                                <option value="+856">+856 (Laos)</option>
                                <option value="+371">+371 (Latvia)</option>
                                <option value="+961">+961 (Lebanon)</option>
                                <option value="+266">+266 (Lesotho)</option>
                                <option value="+231">+231 (Liberia)</option>
                                <option value="+218">+218 (Libya)</option>
                                <option value="+423">+423 (Liechtenstein)</option>
                                <option value="+370">+370 (Lithuania)</option>
                                <option value="+352">+352 (Luxembourg)</option>
                                <option value="+261">+261 (Madagascar)</option>
                                <option value="+265">+265 (Malawi)</option>
                                <option value="+60">+60 (Malaysia)</option>
                                <option value="+960">+960 (Maldives)</option>
                                <option value="+223">+223 (Mali)</option>
                                <option value="+356">+356 (Malta)</option>
                                <option value="+692">+692 (Marshall Islands)</option>
                                <option value="+222">+222 (Mauritania)</option>
                                <option value="+230">+230 (Mauritius)</option>
                                <option value="+52">+52 (Mexico)</option>
                                <option value="+691">+691 (Micronesia)</option>
                                <option value="+373">+373 (Moldova)</option>
                                <option value="+377">+377 (Monaco)</option>
                                <option value="+976">+976 (Mongolia)</option>
                                <option value="+382">+382 (Montenegro)</option>
                                <option value="+95">+95 (Myanmar)</option>
                                <option value="+389">+389 (North Macedonia)</option>
                                <option value="+27">+27 (South Africa)</option>
                                <option value="+966">+966 (Saudi Arabia)</option>
                                <option value="+34">+34 (Spain)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+971">+971 (UAE)</option>
                                <option value="+1">+1 (USA)</option>




                            </select>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                name="phone" id="number"
                                placeholder="Enter phone number"
                            />

                            <br />
                            <textarea id="message" onChange={handleChange} value={formData.message}
                                name="message" placeholder='Message'></textarea> <ValidationError
                                prefix="Message"
                                field="Message"

                            />
                            <br />

                            <br />
                            <button type="submit" >Submit</button>

                        </form>

                    </div>

                </div>

            </div>
            <div >
                <button className="buttons" onClick={() => { document.documentElement.scrollTop = 0; }}>↑</button>
            </div>
        </div>
    )
}

export default Contact
