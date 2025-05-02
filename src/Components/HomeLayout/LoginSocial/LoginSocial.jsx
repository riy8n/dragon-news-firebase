import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
const LoginSocial = () => {
    return (
        <div>
            <h1 className='font-bold mb-5 text-2xl'>Login with</h1>
            <div className='space-y-3'>
                <button className='btn w-full btn-outline btn-secondary'> <span><FcGoogle size={24} /></span>Login with Google</button>
                <button className='btn  btn-outline w-full btn-primary'> <span><IoLogoGithub size={24} /></span>Login with Github</button>
            </div>
        </div>
    );
};

export default LoginSocial;