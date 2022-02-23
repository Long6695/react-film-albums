import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList/MovieList';
import { Carousel, Pagination } from 'antd';
import { useFilmsContext } from '../../context/FilmContext';
import { useNavigate, useLocation } from 'react-router-dom';
const contentStyle = {
  width: '100%',
  height: '400px',
  background: '#1d2d44',
};

const useQueryString = () => {
  return new URLSearchParams(useLocation().search);
};

const HomePage = ({ films }) => {
  const { totalFilm, fetchFilmsData } = useFilmsContext();
  const navigate = useNavigate();

  const queryString = useQueryString();
  const queryPage = queryString.get('_page');
  const [page, setPage] = useState(queryPage || 1);

  const handleOnChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    try {
      navigate({
        pathname: '/',
        search: `_page=${page}&_limit=10`,
      });
      fetchFilmsData(page);
    } catch (error) {}
    // eslint-disable-next-line
  }, [page]);

  return (
    <div style={{ backgroundColor: '#1d2d44', padding: '0 0 20px 0' }}>
      <Carousel style={{ height: '400px' }} autoplay>
        {films.map((film) => (
          <div key={film._id} style={contentStyle}>
            <img
              style={{ width: '100%', objectFit: 'center', height: '400px' }}
              src={film.banner}
              alt={film.title}
            />
          </div>
        ))}
      </Carousel>
      <MovieList films={films} />
      <Pagination
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '50px',
        }}
        onChange={handleOnChange}
        current={page}
        pageSize={10}
        total={totalFilm}
      />
    </div>
  );
};

export default HomePage;
