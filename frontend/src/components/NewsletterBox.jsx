import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className=' text-center'>
      <p className='text-2xl font-medium text-gray-800'>For Selling the second-hand clothing</p>
      <p className='text-gray-400 mt-3'>
      Ready to sell your pre-loved items ? Contact us below to start making a difference through sustainable fashion 
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Contact</button>
      </form>
      <p className='text-2xl font-medium text-gray-800'>Give Back Through Fashion(NGO)</p>
      <p className='text-gray-400 mt-3'>
      Make an impact—donate your gently-used clothing through WearCycle, and we’ll partner with NGOs to help those in need. 
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'> <a href='./aws connecting.html'>Contact</a></button>
      </form>
      <h1><b>Our Team Members</b></h1>
            <ul>
              <li>Syed Mustafa</li>
              <li>Sivaraman</li>
              <li>Sri Krithick Raja</li>
            </ul>
      
    </div>
    
  )
}

export default NewsletterBox
