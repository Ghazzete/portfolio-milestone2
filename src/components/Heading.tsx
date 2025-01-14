import React from 'react'
import '../app/styles/heading.css'

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    
    <div className='heading-container'>
      <h2>{title}</h2>
    <p className='heading-title'></p>
    </div>
  )
}

export default Heading;