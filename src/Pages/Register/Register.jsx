import React, {  useContext, useState} from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
const Register = () => {
  const [nameError,setNameError]=useState("")
    const{ createUser, setUser,updateUser }=useContext(AuthContext)
    const handleFrom=(e)=>{
        e.preventDefault()
       
        const form=e.target
        const name=form.name.value
        if(name.length<5){
          setNameError("Name must be more than 5 character")

        }
        else{
          setNameError("")
        }
        const email=form.email.value
        const photo=form.photo.value

        const password=form.password.value
        createUser(email,password)
        .then((result)=>{
          const user=result.user

          updateUser({ displayName:name, photoURL:photo}).then(() => {
            setUser({...user,displayName:name, photoURL:photo})
          }).catch((error) => {
            console.log(error )
            setUser(user)
          });
          
          
      

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
    }
    
   
    return (
        <div>
             <div className="hero bg-base-100 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <div className="text-center">
      <h1 className=" px-2 pt-5 text-2xl font-bold">Register your account</h1>
    
    </div>
      <form  onSubmit={handleFrom} className="card-body">
        <fieldset className="fieldset">
            {/* name */}
        <label className="label">Name</label>
        <input type="text"
        required
        name="name"
         className="input"
          placeholder="Your name" />
          {
            nameError&& <p className='text-xs text-error'>{nameError}</p>
          }
          
          
        {/* photo url */}
        <label className="label">Photo url</label>
        <input type="text" 
        required
        name="photo"
         className="input"
          placeholder="Photo url" />
            {/* email */}
          <label className="label">Email</label>
          <input type="email"
          required
          name="email" 
          className="input" 
          placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input
          required
           name="password"
           type="password"
            className="input"
             placeholder="Password" />
        
          <button  className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className='text-center text-accent'>Already Have An Account ? <span className='text-red-400'> <Link to='/auth/login'> Login</Link> </span></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;