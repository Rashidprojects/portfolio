import React from 'react'
import hero from '../assets/portfolio-hero.png'

const Home = () => {
  const social_meedia = [
    'logo-instagram',
    'logo-whatsapp',
    'logo-linkedin',
    'logo-github'

  ]
  return (
    <section id='home'
             className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
       <div className='flex-1 flex items-center justify-center h-full'>
        <img src={hero} alt="" className='md:w-11/12 h-full object-cover' style={{width:800}}/>
       </div>
       <div className="flex-1">
        <div className='md:text-left text-center'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-li-white font-bold'>
            <span className='text-cyan md:text-6xl text-5xl'>Hello!</span> <br />
            My Name is <span>Rashid</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Fullstack Developer</h4>
          <button className='btn-primary mt-8'>Contact Me</button>
          <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
            {
              social_meedia?.map(icon => (
                <div key={icon} className='text-gray-600 hover:text-li-white cursor-pointer'>
                  <ion-icon name= {icon}></ion-icon>
                </div>
              ))
            }
          </div>
        </div>
       </div>
    </section>
  )
}

export default Home
