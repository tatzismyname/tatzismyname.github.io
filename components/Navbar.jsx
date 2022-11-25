import Image from  'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill, BsFacebook} from 'react-icons/bs';
import { useRouter } from 'next/router';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(()=>{
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch' 
      )
      {
          setNavBg('transparent')
          setLinkColor('#ecf0f3')
      } else {
        setNavBg('#ecf0f3')
        setLinkColor('#1f2937')
      }
   
  },[router])

  const handleNav = () => { 
    setNav(!nav)
  };

  useEffect(() => {
    const handleShadow = () => {
    if (window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
    window.addEventListener('scroll', handleShadow);
      }, []);

  return ( 
    <div 
    style={{backgroundColor: `${navBg}`}}
    className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
    <Link href='/' >
    <h1 style={{color: `${linkColor}`}} className='font-burtons text-xl underline font-extrabold'>developedbytatz</h1>
    </Link>
       <div>
        <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
            <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b font-bold'>Home</li>
            </Link>
            <Link href='/#about'>
                <li className='ml-10 text-sm uppercase hover:border-b font-bold'>About</li>
            </Link>
            <Link href='/#skills'>
                <li className='ml-10 text-sm uppercase hover:border-b font-bold'>Skills</li>
            </Link>
            <Link href='/#projects'>
                <li className='ml-10 text-sm uppercase hover:border-b font-bold'>Projects</li>
            </Link>
            <Link href='/#contact'>
                <li className='ml-10 text-sm uppercase hover:border-b font-bold'>Contact</li>
            </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={25}/>
        </div>
       </div>
       </div>
       <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/40' : ''}>
        <div className={nav ? 
        'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 
            'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
      <div>
        <div className='flex w-full items-center justify-between'>
          <h1 className='font-burtons text-xl underline font-extrabold' width='87' height='35' alt=''>developedbytatz</h1>
        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'> 
          <AiOutlineClose />
        </div>
        </div>
        <div className='border-b border-gray-300 my-4'>
          <p className='w-[85%] md:w-[90%] py-4'>Let's Build Something Legendary Together</p>
        </div>
      </div>
      <div className='py-2 flex flex-col'>
        <ul className='uppercase'>
          <Link href='/'>
          <li onClick={()=> setNav(false)} className='py-2 text-sm'>Home</li>
          </Link>
          <Link href='/#about'>
          <li onClick={()=> setNav(false)} className='py-2 text-sm'>About</li>
          </Link>
          <Link href='/#skills'>
          <li onClick={()=> setNav(false)} className='py-2 text-sm'>Skills</li>
          </Link>
          <Link href='/#projects'>
          <li onClick={()=> setNav(false)} className='py-2 text-sm'>Projects</li>
          </Link>
          <Link href='/#contact'>
          <li onClick={()=> setNav(false)} className='py-2 text-sm'>Contact</li>
          </Link>
        </ul>
        <div className='pt-5 border-t border-gray-300'>
          <p>Let's Connect</p>
          <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <BsFacebook />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
        </div>
       </div>
        </div>
    
  )
}

export default Navbar