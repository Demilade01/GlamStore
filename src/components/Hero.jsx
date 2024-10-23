import React from 'react'
import { PiArrowUpRightBold, PiBagBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='hero' className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[811px] w-full'>
      <div className='relative max-w-[777px] top-44 xs:top-50'>
        <h2 className='h1 capitalize max-w-[611px]'>Elevate your wardrobe with trendy fashion from <span className='bg-secondary rounded-full px-2'>GlamStore</span></h2>

        <div className='flex gap-x-10 max-md:flex-col-reverse mt-28'>
          <Link to={''} className='bg-tertiary p-2 text-white pl-5 rounded-full flexCenter gap-x-2 inline-flex w-full max-x-60'>
            Latest Products
            <PiBagBold className='bg-white text-tertiary rounded-full text-4xl p-2.5'/>
            <PiArrowUpRightBold className='bg-white text-tertiary rounded-full text-4xl p-2.5'/>
          </Link>
          <p className='my-2'>Discover the latest styles and trends to keep your wardrobe fresh and fashionable.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero