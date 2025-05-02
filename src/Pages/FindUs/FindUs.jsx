import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Find us on</h1>
           
            <div className="join join-vertical w-full">
            <button className="btn join-item bg-base-100 justify-start"> <span><FaFacebook></FaFacebook></span>Facebook</button>
            <button className="btn join-item bg-base-100 justify-start "> <span><FaTwitter></FaTwitter></span>Twitter</button>
            <button className="btn join-item bg-base-100 justify-start"> <span><FaInstagram></FaInstagram></span>Instagram</button>
            </div>
            
        </div>
    );
};

export default FindUs;