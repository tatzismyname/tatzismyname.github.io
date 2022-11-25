import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div>
              <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-red-300 to-red-500'>
        <Image className='rounded-xl group-hover:opacity-30' src={backgroundImg} alt='' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-white text-2xl tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>React JS</p>
            <Link href={projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default ProjectItem