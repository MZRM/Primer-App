import React from 'react'
//import image1 from '../assets/java_docker.jpg'
export default function Card({id, title, image, instructor}) {

  return (
    <div className='card text-center bg-dark'>
     <div className='card-body text-light'>
      <img src={image} alt='java-docker'/>
     
      <h4 className='card-title'>{title}</h4>
      <p className='card-text text-secodary'>
        instructor:{instructor}
      </p>
    <a href='#!' className='btn btn-outline-secondary rounded-0'>ir al sitio web</a>
    
    </div>
    </div>
  )
}
