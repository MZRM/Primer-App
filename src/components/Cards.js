import React from 'react'
import imagen1 from '../assets/java_docker.jpg'
import imagen2 from '../assets/node.jpg'
import imagen3 from '../assets/halo.jpg'
import Card from './Card'

  const cards=[
    {
      id:1,
    title: 'React Fast',
    image: imagen1,
    instructor: "agustin meza"
  },

  {
    id:2,
    title: 'Java Docker',
    image: imagen2,
    instructor: "Sheila Nav"
  },

  {
    id:3,
    title: 'node js',
    image: imagen3,
    instructor: "Valentin Perez"
  }

  ]

export default function Cards(){
  console.log(cards)
  return (
    <div className='container d-flex justify-content-center aling-item-center-h100'>
      <div className='row'>
        
        {
          cards.map (c=>(
            <div className='col-md-4' key={cards.id}>
              <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              />
              </div>
          ))
        }

      </div>
    </div>
    
  )
}
