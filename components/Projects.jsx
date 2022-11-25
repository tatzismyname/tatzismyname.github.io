import React from 'react';
import Image from 'next/image';
import propertyImg from '../public/assets/projects/property.jpg'
import Link from 'next/link'
import ProjectItem from './ProjectItem';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'



const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <p className='text-xl tracking-widest uppercase text-red-600'>Projects</p>
    <h2 className='py-4'>What I've Built</h2>
    <div className='grid md:grid-cols-2 gap-8'>

  <ProjectItem title='Property Finder' backgroundImg={propertyImg} projectUrl='/property' />
  <ProjectItem title='Crypto App' backgroundImg={cryptoImg} projectUrl='/crypto' />
  <ProjectItem title='Netflix App' backgroundImg={netflixImg} projectUrl='/netflix' />
  <ProjectItem title='Twitch App' backgroundImg={twitchImg} projectUrl='/twitch' />
    </div>
    </div>
    </div>
  )
}

export default Projects