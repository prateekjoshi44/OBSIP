import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useRef} from "react";
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div className=" c">
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Let's discuss Here</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon" />
                                +91-906-852-3252
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon" />
                                prateekjoshi0123@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon" />
                                Govind Nagar, Lane - 10 Sahastradhara Road Dehradun,Uttarakhand India
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>What's your Story?</b> Get in touch. Always available for Freelancing if the right project comes along me.
                        </p>
                        <form ref = {formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" />
                            <input type="text" placeholder="Subject" name="user_subject" />
                            <input type="text" placeholder="Email" name="user_email" />
                            <textarea  rows= "6" placeholder= "Message" name="message"  />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact