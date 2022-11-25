import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
    <p className='text-xl tracking-widest uppercase text-red-600'>Skills</p>
    <h2 className='py-4'>What I Can Do</h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
    
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image 
    src='assets/skills/html.png' 
    width='64' 
    height='64' alt='' />
    </div>
    <div className='flex flex-col items-center justify-center'>
        <h3>HTML5</h3>
    </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image 
    src='assets/skills/css.png' 
    width='64' 
    height='64' alt='' />
    </div>
    <div className='flex flex-col items-center justify-center'>
        <h3>CSS3</h3>
    </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image 
    src='assets/skills/javascript.png' 
    width='64' 
    height='64' alt='' />
    </div>
    <div className='flex flex-col items-center justify-center'>
        <h3>JAVASCRIPT</h3>
    </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image 
    src='assets/skills/react.png' 
    width='64' 
    height='64' alt='' />
    </div>
    <div className='flex flex-col items-center justify-center'>
        <h3>REACT</h3>
    </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image 
    src='assets/skills/tailwind.png' 
    width='64' 
    height='64' alt='' />
    </div>
    <div className='flex flex-col items-center justify-center'>
        <h3>TAILWIND</h3>
    </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image 
    src='assets/skills/mongo.png' 
    width='64' 
    height='64' alt='' />
    </div>
    <div className='flex flex-col items-center justify-center'>
        <h3>MONGO DB</h3>
    </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image 
    src='assets/skills/node.png' 
    width='64' 
    height='64' alt='' />
    </div>
    <div className='flex flex-col items-center justify-center'>
        <h3>NODE</h3>
    </div>
    </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    <div className='m-auto'>
    <Image 
    src='assets/skills/nextjs.png' 
    width='64' 
    height='64' alt='' />
    </div>
    <div className='flex flex-col items-center justify-center'>
        <h3>NEXTJS</h3>
    </div>
    </div>
    </div>
    
    
    </div>
    </div>
    </div>
  )
}

export default Skills