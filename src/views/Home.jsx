import React, { useEffect, useState } from 'react'
import CardMovie from '../components/CardMovie';
import CardActor from '../components/CardActor';
import Movies from '../assets/mock-data/movies.json';
import actorsData from '../assets/mock-data/actors.json';
import '../assets/styles/home.css';

export default function home() {
  const [directing, setDirecting] = useState([]);
  const [actorInLeadingRole, setActorInLeadingRole] = useState([]);
  const [actressInLeadingRole, setActressInLeadingRole] = useState([]);
  const [actorInSupportingRole, setActorInSupportingRole] = useState([]);
  const [actressInSupportingRole, setActressInSupportingRole] = useState([]);
  const [animatedFeature, setAnimatedFeature] = useState([]);

  useEffect(() => {
    setDirecting(actorsData.directing);
    setActorInLeadingRole(actorsData.actorInLeadingRole);
    setActressInLeadingRole(actorsData.actressInLeadingRole);
    setActorInSupportingRole(actorsData.actorInSupportingRole);
    setActressInSupportingRole(actorsData.actressInSupportingRole);
    setAnimatedFeature(actorsData.animatedFeature);
  }, []);

  return (
    <div className="home-container">
      {Movies.map(movie => (
        <CardMovie 
          key={movie.id} 
          title={movie.name} 
          image={movie.image}
        />
      ))}
      <div className='actors'>
        <section>
          <h2>Directing</h2>
          <div className='category-container'>
            {directing.map(actor => (
              <CardActor
                key={actor.id}
                name={actor.name}
                movie={actor.movie}
                image={actor.image}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Actor in Leading Role</h2>
          <div className='category-container'>
            {actorInLeadingRole.map(actor => (
              <CardActor
                key={actor.id}
                name={actor.name}
                movie={actor.movie}
                image={actor.image}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Actress in Leading Role</h2>
          <div className='category-container'>
            {actressInLeadingRole.map(actor => (
              <CardActor
                key={actor.id}
                name={actor.name}
                movie={actor.movie}
                image={actor.image}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Actor in Supporting Role</h2>
          <div className='category-container'>
            {actorInSupportingRole.map(actor => (
              <CardActor
                key={actor.id}
                name={actor.name}
                movie={actor.movie}
                image={actor.image}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Actress in Supporting Role</h2>
          <div className='category-container'>
            {actressInSupportingRole.map(actor => (
              <CardActor
                key={actor.id}
                name={actor.name}
                movie={actor.movie}
                image={actor.image}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Animated Feature</h2>
          <div className='category-container'>
            {animatedFeature.map(actor => (
              <CardActor
                key={actor.id}
                name={actor.name}
                movie={actor.movie}
                image={actor.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}