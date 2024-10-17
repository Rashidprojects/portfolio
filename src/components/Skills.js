import React from 'react'
import css from '../assets/css-3.png'
import git from '../assets/git.png'
import django from '../assets/django-icon.svg'
import html from '../assets/html-5.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import js from '../assets/javascript.png'
import python from '../assets/python.png'



const Skills = () => {

  const skills = [
    {
      logo : react,
      name : 'React',
      tool : 'Framework'
    },
    {
      logo : js,
      name : 'JavaScript',
      tool : 'Interaction'
    },
    {
      logo : tailwind,
      name : 'Tailwind CSS',
      tool : 'User Interface'
    },
    {
      logo : css,
      name : 'CSS',
      tool : 'User Interface'
    },
    {
      logo : html,
      name : 'HTML',
      tool : 'Language'
    },
    {
      logo : django,
      name : 'Django',
      tool : 'Web Server'
    },
    {
      logo : python,
      name : 'Python',
      tool : 'Language'
    },
    {
      logo : git,
      name : 'Git',
      tool : 'Version Control'
    },
]

  
  return (
    <section id='skills' className='py-10 bg-gray-800 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan'>Skills</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Essential Tools I Use</p>
        
        <div className='flex flex-wrap items-center justify-center gap-3 px-24 py-12 '>
          {
            skills.map((skill,i) => (
              <div className='flex border-[2px] border-gray-900 p-3 w-[330px] rounded-2xl gap-3 cursor-pointer'>
                <div className='bg-gray-900 p-3 rounded-lg'>
                  <img className='w-[40px]' src={skill.logo} alt="" />
                </div>
                <div className='flex items-start flex-col justify-center'>
                  <h2 className='font-semibold tracking-widest'>{skill.name}</h2>
                  <p className='font-light text-[14px] text-gray-300'>{skill.tool}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
