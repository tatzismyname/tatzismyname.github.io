import React from 'react'
import Image from  'next/image';


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-red-600'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <br />
                <p className='py-2 text-gray-600'>I am not your normal developer</p>
                <p className='py-2 text-gray-600'>
                I am a former systems administrator with a certificate in culinary arts fundamentals course seeking 
                a full-time position in the field of computer technologies.
                </p>
                <br />
                <p className='py-2 text-gray-600'>
                    I also recently finished The Web Developer Bootcamp 2022 by Colt Steele
                    on udemy and currently learning Reactjs,Nextjs and TailwindCss.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out my latest projects.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
             <Image src="/assets/about.jpg" alt="" width='400' className='rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default About