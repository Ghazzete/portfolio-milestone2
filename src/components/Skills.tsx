import React from 'react'

const Skills = () => {
  return (
    <div  id='Skills'className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500'>
                I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I&apos;m also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.</p>
            </div>
            <div className='grid grid-cols-2 text-amber-400 text-3xl sm:text-4xl'>
                 <div className='space-y-2'>
                    <h2 data-aos="zoom-in">Typescript</h2>
                    <h2 data-aos="zoom-in">React.js</h2>
                    
                 </div>
                 <div className='space-y-2'>
                    <h2 data-aos="zoom-in">Next.js</h2>
                    <h2 data-aos="zoom-in">Tailwind</h2>
                    
                 </div>
            </div>
            </div>
            <div>

            </div>
        </div>
   
  )
}

export default Skills