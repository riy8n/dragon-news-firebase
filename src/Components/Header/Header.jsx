import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-5 mt-10'>
          
            <img className='w-[471px] h-[60px]' src="/public/assects/logo.png" alt="" />
            <p className='py-1.5 text-accent '>Journalism Without Fear or Favour</p>


            <p>{format(new Date(), "EEEE, MMMM d,	yyyy" )}</p>
                </div>
    );
};

export default Header;