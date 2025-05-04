import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div className='my-5'>
            <header className='w-11/12 mb-6'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 m-8'>
            <Outlet></Outlet>

            </main>
        </div>
    );
};

export default Authentication;