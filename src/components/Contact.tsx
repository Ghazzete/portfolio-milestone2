import React from 'react'
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";

export default function Contact() {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'data-aos="zoom-in">Get in touch</h2>
                <p className='text-gray-600 text-[18px]pt-2'data-aos="zoom-in">
                    Drop me a line,send me a message
                </p>
                <div className='flex gap-3 items-center'data-aos="zoom-in">
                <GoMail  size={35}/>wwwtanoli302@gmail.com
                </div>
                <div className='flex gap-3 items-center'data-aos="zoom-in">
                <BsTelephone size={35}/>(021) 000-0000
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'data-aos="zoom-in">
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-yellow-600'
                    id='Name'/>
                </div>
                <div className='flex flex-col gap-1'data-aos="zoom-in">
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-yellow-600'
                    id='Email'/>
                </div>  
                <div className='flex flex-col gap-1'data-aos="zoom-in">
                    <label htmlFor='message'>Message</label>
                    <textarea
                    className=' bg-transparent border border-yellow-600'
                    id='Message' rows={8}>
                    </textarea>
                </div>
                <button className='bg-yellow-500 p-2 px-6'data-aos="zoom-in">Send</button>
            </div>
        </div>
    </div>
  )
}

 