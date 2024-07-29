import React from 'react'
import CardMovie from '../components/CardMovie'
import Movies from '../assets/mock-data/movies.json'
import '../assets/styles/home.css';

export default function home() {
  return (
    <div className="home-container">
      {Movies.map(movie => (
        <CardMovie 
          key={movie.id} 
          title={movie.name} 
          image={movie.image}
        />
      ))}
    </div>
  )
}