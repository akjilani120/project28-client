import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
const Login = ({user , setUser}) => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {        
        const email = data.email
        const password = data.password
        const userData ={
            email,
            password
        }
     fetch("https://nameless-fortress-11357.herokuapp.com/users/login" ,{
        method:"POST",
        headers:{
            "content-type" : "application/json"
        },
        body : JSON.stringify(userData)
        
     })
     .then(res  => {
        if(res.status === 200){
            setUser(res)
            navigate('/atboard')
          return toast("Your Login Success") 
         
        } 
        if (res.status === 500 ){
        return toast.error("Email and Password invalid")
        }
        console.log(res)
     })     
     .then(data => data)
     reset()
    };
    return (
        <div className='reg-head login-header'>
            <div className='container'>
              <div className='reg-main'>
                <div className='reg-body'>
                    <h2 className='text-center text-primary'>Please Log in</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
              
               <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input  className='form-control' type="email" {...register("email", { required: true })} />
                        
                </div>              
               <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                    <input className='form-control'  type="password" {...register("password", { required: true })} />
                        
                </div>
                <h5>If You haven't account <Link to="/registation"> Registation Now</Link>  </h5>
               <div class="my-4 text-center">
               <input className='btn btn-primary px-4 py-2' type="submit" />
                        
                </div>
               </form>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Login;