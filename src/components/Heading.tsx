import React from 'react'

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    
    <div className='text-center text-4xl pb-8'>
      <h2>{title}</h2>
    <p className='border-b-4 inline-block pb-2'></p>
    </div>
  )
}

export default Heading;