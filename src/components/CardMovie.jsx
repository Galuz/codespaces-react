import React from 'react'

export default function CardMovie({title, image}) {
  return (
    <div className='card-movie'>
      <img src={image} alt="image movie" />
      <span>{title}</span>
    </div>
  )
}
