import React from 'react';
import login from '../assets/login.png'
import mail from '../assets/mail.png'
import lock from '../assets/lock.png'
import see from '../assets/see.png'
import unsee from '../assets/unsee.png'
import circle from '../assets/circle.png'
import check from '../assets/check.png'


const Login = () => {

  return (
    <div className='bg-teal-100/50 min-h-screen flex flex-col justify-center items-center gap-4 text-[#09AA9C]'>
      <div>
      <img className='h-[4rem] bg-[#09AA9C] p-4 rounded-2xl' src={login} alt="" />
      </div>
      <h1 className='text-3xl font-bold '>Welcome Back!</h1>
      <h1>Sign in to your Fundsy intern account</h1>

      <div className='flex flex-col border border-[#09AA9C] p-6 rounded-2xl bg-white shadow justify-center items-center'>
        <h1 className='font-semibold text-2xl'>Sign In</h1>

        <div>
          <h1 className='py-3.5 text-[1rem] px-0.5'>Email Address</h1>
        <div className='relative mb-4'>
          <img src={mail} className='h-[1.5rem] absolute left-3.5 top-1.5' alt="" />
          <input type="email" placeholder="Enter Your Email" className='h-10 w-[25rem] border border-[#09AA9C] rounded-2xl px-[3rem] focus:outline-offset-2 outline-[#09AA9C] focus:outline-2'/>
        </div>
        </div>

        <div>
          <h1 className='py-3.5 text-[1rem] px-0.5'>Password</h1>
        <div className='relative mb-4'>
          <img src={lock} className='h-[1.5rem] absolute left-3.5 top-1.5' alt="" />
          <input type="email" placeholder="Enter Your Password" className='h-10 w-[25rem] border border-[#09AA9C] rounded-2xl px-[3rem] focus:outline-offset-2 outline-[#09AA9C] focus:outline-2'/>
        </div>
        </div>

        <div className='flex flex-row justify-between items-center gap-32'>
          <div className='flex gap-1.5 items-center justify-center'>
          <img className='h-[1rem]' src={circle} />
          <h1>Remember me</h1>
        </div>
        <h1>Forgot Password?</h1>
        </div>
        

      </div>
    </div>
  );
};

export default Login;
