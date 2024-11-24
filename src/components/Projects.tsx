import React from 'react';
import Heading from '@/components/Heading';
import Card from './Card';
import '../app/styles/project.css';


const data = [
  {
    id: 0,
    title: "Birthday Wish App",
    desc: "A React & Typescript birthday wish app that allows users to send custom birthday messages",
    img: "/project04.PNG",
    tags: ["React", "Node", "Tailwind", "Typescript"],
  },
  {
    id: 1,
    title: "Weather Widget",
    desc: "A React & Typescript responsive weather widget app that displays real-time weather updates",
    img: "/project02.PNG",
    tags: ["React", "Node", "Tailwind", "Typescript"],
  },
  {
    id: 2,
    title: "Number Guessing",
    desc: "A React & Typescript website number guessing game where users try to guess the correct number",
    img: "/project03.PNG",
    tags: ["React", "Node", "Tailwind", "Typescript"],
  },
  {
    id: 3,
    title: "Countdown Timer",
    desc: "A React & Typescript powered website to track time with an interactive countdown feature",
    img: "/project01.png",
    tags: ["React", "Node", "Tailwind", "Typescript"],
  },
];

export default function Project() {
  return (
    <div id="Projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
}
