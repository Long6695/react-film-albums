import React from 'react';
import MovieList from './components/MovieList/MovieList';
import {Carousel } from 'antd';

const contentStyle = {
  width: '100%',
  height: '400px',
  background: '#1d2d44',
};

const HomePage = ({films}) => {
  return (
    <div style={{backgroundColor:'#1d2d44'}}>
      <Carousel style={{height: '400px'}} autoplay>
        {films.map(film => (
          <div key={film._id} style={contentStyle}>
            <img style={{width: '100%', objectFit: 'center', height:'400px'}} src={film.banner} alt={film.title} />
          </div>
        ))}
      </Carousel>
      <MovieList films={films}/>
    </div>
  );
};

export default HomePage;
