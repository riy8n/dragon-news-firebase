import React from 'react';
import LoginSocial from '../LoginSocial/LoginSocial';
import FindUs from '../../../Pages/FindUs/FindUs';
import Qzone from '../../../Pages/QZone/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
          <LoginSocial></LoginSocial>
          <FindUs></FindUs>
          <Qzone></Qzone>
        </div>
    );
};

export default RightAside;