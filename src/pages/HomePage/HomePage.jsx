import React from 'react';
import MovieList from './components/MovieList/MovieList';
import {Carousel, Pagination } from 'antd';
import { useFilmsContext } from '../../context/FilmContext';
const contentStyle = {
  width: '100%',
  height: '400px',
  background: '#1d2d44',
};
const HomePage = ({films}) => {
  const {page, setPage, totalFilm} = useFilmsContext()

  const handleOnChange = (page) => {
    setPage(page)
  };

  return (
    <div style={{backgroundColor:'#1d2d44', padding: '20px 0'}}>
      <Carousel style={{height: '400px'}} autoplay>
        {films.map(film => (
          <div key={film._id} style={contentStyle}>
            <img style={{width: '100%', objectFit: 'center', height:'400px'}} src={film.banner} alt={film.title} />
          </div>
        ))}
      </Carousel>
      <MovieList films={films}/>
      <Pagination style={{display:'flex', justifyContent:'flex-end', marginRight: '50px'}} onChange={handleOnChange} current={page} pageSize={10} total={totalFilm}/>
    </div>
  );
};

export default HomePage;
