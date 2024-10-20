import React from 'react'
import Heading from '@/components/Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Birthday Wish App",
        desc: "A React & Typescript birthday wish app that allows users to send custom birthday message",
        img:"/project04.PNG",
        tags: ["React", "Node", "Tailwind", "Typescript"],
    },
    {
    id: 1,
    title: "Weather Widget",
    desc: "A React & Typescript responsive weather widget app that displays real-time weather updates ",
    img:"/project02.PNG",
    tags: ["React", "Node", "Tailwind", "Typescript"],
    },
    {
        id: 2,
        title: "Number Guessing",
        desc: "A React & Typescript wibsite number guessing game where users try to guess the correct number",
        img:"/project03.PNG",
        tags: ["React", "Node", "Tailwind", "Typescript"],
    },
   
    {
        id: 3,
        title: "Countdown Timer",
        desc: "A React & Typescript powered wibsite to track time with an interactive countdown feature",
        img:"/project01.png",
        tags: ["React", "Node", "Tailwind", "Typescript"],
    },
]

export default function Project () {
    return (
        <div id='Projects' className='container pt-32'data-aos="zoom-in">
        <Heading title='My Projects'/>
        <div className='grid gap-24 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
        </div>
    )
}