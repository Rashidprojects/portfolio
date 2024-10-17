import React from 'react'
import hero from '../assets/portfolio-hero.png'

const Home = () => {
  const social_meedia = [
    {
      name: 'logo-instagram',
      link: 'https://www.instagram.com/rashid___raz__/'
    },
    {
      name: 'logo-whatsapp',
      link: 'https://wa.me/918075764747'
    },
    {
      name: 'logo-linkedin',
      link: 'https://www.linkedin.com/in/mohammedrashidc/'
    },
    {
      name: 'logo-github',
      link: 'https://github.com/Rashidprojects'
    },
    
  ]
  return (
    <section id='home'>
      <div className='min-h-screen flex pt-12 md:flex-row md:pt-0 flex-col items-center'>
          <div className="flex-1 items-center justify-center">
            <div className='flex items-center flex-col '>
                <div className='md:text-left text-center'>
                  <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-li-white font-bold'>
                    <span className='text-cyan md:text-6xl text-5xl'>Hello!</span> I'm  <br />
                    Mohammed <span>Rashid An</span> <br />
                    Full Stack Developer
                  </h1>
                  <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Passionate React.js and Django Developer</h4>
                  <button className='btn-primary mt-8'>Get Started</button>
                  <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
                    {
                      social_meedia?.map((icon,i) => (
                        <div key={i} className='text-gray-600 hover:text-li-white cursor-pointer'>
                          <a href= {icon.link} target='_blank' rel='noreferrer'> <ion-icon name= {icon.name}></ion-icon></a>
                        </div>
                      ))
                    }
                  </div>
                </div>
            </div>
          </div>

          <div className='flex-1 flex items-center justify-center  h-full w-full '>
            {/* <img src={hero} alt="" className='md:w-11/12 h-full object-cover' style={{width:800}}/> */}
            <div className=' pt-12 md:pt-0 bg-gradient-to-b from-black via-black to-cyan h-[600px] w-[550px] rounded-[55px] flex items-center justify-center overflow-hidden'>
              <img alt='hero-img' src= {hero} className='w-[459px]' />
            </div>
          </div>
      </div>

    </section>
  )
}

export default Home
