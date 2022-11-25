import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'> 
            Lets' Build Something Cool Together!
            </p>
        <h1 className='py-4 font-extrabold text-red-600 '>Hi, I'm <span className='text-[#5651e5'>Tatz</span>
        </h1>
        <h1 className='py-2 text-gray-700'>A Freelance Web Developer
        </h1>
        <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a free lance web developer specializing in building web applications.
          currently I'm focused on building responsive front-end web applications while learning back-end technologies.
        </p>
        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
      <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
     <BsFacebook className='text-2xl'/>
        </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
     <FaGithub className='text-2xl'/>
        </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
     <AiOutlineMail className='text-2xl'/>
        </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
     <BsFillPersonLinesFill className='text-2xl'/>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Main