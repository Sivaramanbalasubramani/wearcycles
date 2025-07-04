import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <h1><b>Welcome to WearCycle – A Sustainable Fashion Movement</b></h1>
              <p>At WearCycle, we believe that fashion can be both stylish and sustainable. Our platform is designed for those who want to make a positive impact by giving clothes a second life. Here’s how you can join our movement:</p>
              <ol>
                <li><b>Selling and Buying Pre-loved Clothes:</b> Whether you're looking to declutter or discover unique pieces, WearCycle connects you to a community of fashion-forward individuals dedicated to sustainable shopping. Sell your gently-used clothing, or find something new-to-you that fits your style</li>
                <li><b>Premium Products:</b> We offer a selection of high-quality, premium products that have been carefully curated, ensuring sustainability without compromising on style</li>
                <li><b>Making a Difference Through Donations(Through NGO):</b> Our newest feature allows you to donate clothing directly through WearCycle, where we partner with NGOs to distribute these items to orphanages and communities in need. Together, we can extend the life of each garment and make a real difference</li>
              </ol>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at WearCycle is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Selling Old Clothes:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Buying old Clothes:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Buying & Selling Premium Products:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Donations:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
