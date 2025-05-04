import React, {  useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const {singIn}=useContext(AuthContext)
  const [error,setError]=useState("")
  const location=useLocation()
  const Navigate=useNavigate()
  console.log(location)
  const handleLogIn=e=>{

    e.preventDefault()
    const form=e.target;
    const email=form.email.value
    const password=form.password.value
    console.log(email,password)
    singIn(email,password)
    .then((result) => {
      const user = result.user;
      console.log(user)
      Navigate(`${location.state?location.state:"/"}`)
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
      // console.log(errorMessage)
    });
  }
 

    return (
        <div>
         <div className="hero bg-base-100 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <div className="text-center">
      <h1 className=" p-2 text-2xl font-bold">Login your account</h1>
    
    </div>
      <div className="card-body">
        <form onSubmit={handleLogIn} className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input 
          name='email'
           type="email"
           className="input" 
          placeholder="Email" 
          required/>
          {/* password */}
          <label className="label">Password</label>
          <input type="password"
          name='password'
           className="input" 
           placeholder="Password"
           required />
           
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error&& <p className='text-red-600 text-xs'>{error}</p>
           }
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className='text-center text-accent'>Dont’t Have An Account ? <span className='text-red-400'> <Link to='/auth/register'> Register</Link> </span></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;