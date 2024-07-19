import React from 'react'
import belfastMovie from '../assets/belfast-movie.png';

export default function CardMovie() {
  return (
    <div className='card-movie'>
      <img src={belfastMovie} alt="image movie" />
      <span>Belfast</span>
    </div>
  )
}
