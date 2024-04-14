import React from 'react'
import aboutImg from '../assets/about.png'

const AboutMe = () => {
  const info = [
    { text: "Years of Experience", count: "02" },
    { text: "Completed Projects", count: "12" },
    { text: "Companies Work", count: "01" }
  ]
  return (
    <section id='about' className='py-10 text-li-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-gray-300 my-3'>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
              I'm Rashid, a computer science graduate with a passion for building awesome stuff on the web. 
              As a full-stack developer proficient in Python Django and ReactJS, 
              I love crafting seamless experiences from backend to frontend. 
              With solid skills in HTML, CSS, and JavaScript, I've brought numerous websites to life. 
              Let's connect and bring your digital ideas to reality! 🚀
              </p>
              <div className='flex mt-10 items-center gap-7'>
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className='md:text-4xl text-2xl font-semibold'>{content.count}
                    <span className='text-cyan'>+</span>{" "}</h3>
                    <span className='md:text-base text-sm'>{content.text}</span>
                  </div>
                ))}
              </div>
              <br /><br />
              <a href="rashid-resume.pdf" download="rashid-resume.pdf">
                <button className='btn-primary'>Download CV</button>
              </a>
            </div>
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
              <img src={aboutImg} alt="" className='w-full object-cover bg-cyan rounded-xl'/>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutMe
