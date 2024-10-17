import React from 'react'

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
            <div className='text-gray-300 my-3 '>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
              Hello! I'm <b>Mohammed Rashid</b>, a passionate Full Stack Developer with expertise in <b>React.js</b> and <b>Django</b>.
               My journey in the tech field has fueled my love for creating dynamic and user-friendly web applications.
               I enjoy building responsive front-end interfaces and robust back-end systems, ensuring seamless user experiences.
              </p>
              <div className='flex flex-col items-start  pt-4 leading-10'>
                <p className='ps-11'><b>My Skills</b> </p>
                <p className='pt-1 ps-11 '>
                  <span >
                    <b> ➡️ Frontend Development: </b>Proficient in building interactive and visually 
                      appealing interfaces using React.js.
                  </span>
                </p>
                <p className='pt-1 ps-11'>
                  <span >
                    <b> ➡️ Backend Development : </b>Experienced in developing RESTful APIs and web applications with Django, 
                    managing databases.
                  </span>
                </p>
                <p className='pt-1 ps-11 '>
                  <span >
                    <b> ➡️ Problem Solver : </b>I thrive on tackling complex challenges and continuously learning new technologies to enhance my skill set.
                  </span>
                </p>
              </div>
              
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
              <a href="Frontend-Engineer-Intern.pdf" download="Frontend-Engineer-Intern.pdf">
                <button className='btn-primary'>Download CV</button>
              </a>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default AboutMe
