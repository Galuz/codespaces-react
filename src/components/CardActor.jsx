import React from 'react'

export default function CardActor({name, movie, image}) {
  return (
    <div className='card-actor'>
      <img src={image} alt={`${name} image`}/>
      <div>
        <p>{name}</p>
        <span>{movie}</span>
      </div>
    </div>
  )
}
