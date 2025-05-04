import React, {  useContext} from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const{ user,logOut }=useContext(AuthContext)
    const handleLogout=()=>{
        console.log("logout")
        logOut().then(() => {
        alert("singOut successfully")
              }).catch((error) => {
             console.log(error)
              });
              console.log(user)
    }
    return (
        <div className='flex justify-between items-center'>
            <div>{user&&user.email}</div>
            <div className='nav flex gap-5 text-accent '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>

            </div>
            <div className='login-btn flex gap-2'>
               <img className='w-12 rounded-full' src='/assects/user.png' alt="" />
                {
                    user? (<button onClick={handleLogout} className='btn btn-primary px-10'>LogOut</button>): (<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>)
                }
               
            </div>
        </div>
    );
};

export default Navbar;