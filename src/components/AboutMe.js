import React from 'react'

const AboutMe = () => {
  return (
    <section id='about' className='py-10 text-li-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit cupiditate,
                 fuga aliquam porro distinctio neque rerum vitae ipsa nihil non!
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Placeat dolore omnis accusamus alias vero quidem maiores sit pariatur aspernatur natus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
