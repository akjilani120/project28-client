import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import './Registation.css'
const Registation = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const imgStorageKey = 'a20408031904de293b263e5a8f8e5393'
    const onSubmit = data => {
        const formData = new FormData();
        const image = data.img[0]
        formData.append('image', image);           
            const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url ,{
            method:"POST",
            body:formData
        })
        .then(res => res.json())
         .then(result => {
            if(result.success){
                const name = data.name;
                const email = data.email
                const password = data.password;
                const img = result.data.url
                const totalData ={
                    name,
                    email,
                    img,
                    password
                }
               fetch('https://nameless-fortress-11357.herokuapp.com/users', {
                    method:"POST",
                    headers:{
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(totalData)
                })
                .then(res => res.json())
                .then(data =>{
                   
                    if(data){
                        toast("Success , Registation Successfull")
                        navigate("/")
                       
                    }else{
                        toast("not success ,donot Send your data")
                    }
                })
                reset()
            }
         })
    };
    return (
        <div className='reg-head'>
            <div className='container'>
              <div className='reg-main'>
                <div className='reg-body'>
                    <h2 className='text-center text-primary'>Please Registation</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
               <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input className='form-control'  type="text" {...register("name", { required: true })} />
                        
                </div>
               <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input  className='form-control' type="email" {...register("email", { required: true })} />
                        
                </div>
               <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Profile Image</label>
                    <input className='form-control'  type="file" {...register("img", { required: true })} />
                        
                </div>
               <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                    <input className='form-control'  type="password" {...register("password", { required: true })} />
                        
                </div>
                <h6>If You have account <Link to="/">Login Now</Link>  </h6>
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

export default Registation;