import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import project_person from '../assets/project_person1.png'
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'
import project5 from '../assets/project-5.png'
import './Portfolio.css'

import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules';


const Portfolio = () => {
  const projects = [
    { 
      img: project1, 
      name: 'Restuarent Web App',
      github_link: "https://github.com/Rashidprojects/foodie", 
      live_link: " https://rashidprojects.github.io/foodie/" 
    },
    { 
      img: project2, 
      name: 'Travel Agency Web App',
      github_link: "https://github.com/Rashidprojects/tour", 
      live_link: "https://rashidprojects.github.io/tour/" 
    },
    { 
      img: project3, 
      name: 'Real-estate Web App',
      github_link: "https://github.com/Rashidprojects/real-estate", 
      live_link: "https://rashidprojects.github.io/real-estate/" 
    },
    { 
      img: project4, 
      name: 'Furniture Web App',
      github_link: "https://github.com/Rashidprojects/furniture-project", 
      live_link: "https://rashidprojects.github.io/furniture-project/" 
    },
    { 
      img: project5, 
      name: 'Dental Clinic Web App',
      github_link: "https://github.com/Rashidprojects/dentelo-site", 
      live_link: "https://rashidprojects.github.io/dentelo-site/" 
    },
    

  ]
  return (
    <section id='projects' className='py-10 text-li-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
      </div>
      <br />
      <div className='flex max-w-6xl px-5 mx-auto items-center relative'>
        <div className='lg:w-2/3 w-full'>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3500,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
          {
            projects.map((project_info,i) => (
              <SwiperSlide key={i}>
              <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                <img src={project_info.img} alt="" className='rounded-lg' />
                <h3 className='text-xl my-4'>{project_info.name} </h3>
                <div className='flex gap-3'>
                  <a href={project_info.github_link} 
                  target='_blank' rel='noreferrer'
                  className='text-cyan bg-gray-800 px-2 py-1 inline-block'>Github</a>
                  <a href={project_info.live_link} target='_blank' rel='noreferrer'
                  className='text-cyan bg-gray-800 px-2 py-1 inline-block'>Live Demo</a>
                </div>
              </div>
            </SwiperSlide>
            ))
          }

          </Swiper>
        </div>
        <div className='lg:block hidden'>
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
