import React from 'react'
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div  id='Skills'className='skills-container'>
        <div className='skill-grid'>
            <div data-aos="zoom-in">
                <h2 className='skills-heading'>Technologies I work with</h2>
                <p className='skills-text'>
                I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I&apos;m also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.</p>
            </div>
            <div className='skills-icons-grid'>
                 <div className='skills-space'>
                    <h2 data-aos="zoom-in">Typescript</h2>
                    <h2 data-aos="zoom-in">React.js</h2>
                    
                 </div>
                 <div className='skills-space h2'>
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
