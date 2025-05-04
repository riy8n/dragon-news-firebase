import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Latest from '../Components/Latest/Latest';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside/RightAside';

const Roots = () => {
    return (
        <div>
        <header>
        <Header></Header>
        <section className='w-11/12 mx-auto my-3'>
            <Latest></Latest>
        </section>
        <nav className='w-11/12 mx-auto my-3'>
            <Navbar></Navbar>
        </nav>
        </header>
        <main className='w-11/12 mx-auto my-3 *: grid grid-cols-12 gap-2'>
          <aside className='col-span-3 sticky top-0 h-fit'>
            <LeftAside></LeftAside>
          </aside>
            <section className='main col-span-6  '>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3 sticky top-0 h-fit'>
                <RightAside></RightAside>
            </aside>
        </main>
  
        </div>
    );
};

export default Roots;