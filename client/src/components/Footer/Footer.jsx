import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";

import "./Footer.scss";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita, sit nobis maiores laboriosam ut dolorum ab itaque unde accusamus repudiandae aliquid neque voluptatem cum quasi autem? Soluta commodi recusandae itaque dignissimos dolorem id.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-items">
                    <FaLocationArrow/>
                    <div className="text">Dr. Zakir Hussain Ward, Ballarpur, 442701, Maharashtr</div>
                </div>
                <div className="c-items">
                    <FaMobileAlt/>
                    <div className="text">Phone: 9834 874 903</div>
                </div>
                <div className="c-items">
                    <FaEnvelope/>
                    <div className="text">Email: jiteshgadgilwar@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Home Theatres</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms and Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    SONICHUB 2023 CREATED BY: JITESH GADGILWAR
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;
