import React from 'react';

import { Card } from 'antd';

import { Link } from 'react-router-dom';
import { useFilmsContext } from '../../../../context/FilmContext';

const MovieCard = ({ film }) => {
  const { Meta } = Card;
  const { handleDeleteFilmById, user } = useFilmsContext();
  const token = localStorage.getItem('token');

  const handleDeleteFilm = (id) => () => {
    handleDeleteFilmById(id, token);
  };

  const styledButton = {
    margin: '10px',
    padding: '4px 12px',
    outline: 'none',
    border: 'none',
    fontSize: '16px',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    borderRadius: '5px',
    color: 'orange',
    cursor: 'pointer',
  };

  return (
    <>
      <Link to={`/movie/${film._id}`}>
        <Card
          hoverable
          style={{
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
          cover={
            <img
              style={{ height: '250px' }}
              src={film.banner}
              alt={film.title}
            />
          }
        >
          <Meta
            style={{
              display: 'inline-block',
              maxWidth: '180px',
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={film.title}
            description={film.description}
          />
        </Card>
      </Link>
      {Object.keys(user).length > 0 && (
        <div style={{ position: 'absolute', top: '0', right: '20px' }}>
          <Link to={`/edit/${film._id}`} style={styledButton}>
            Edit
          </Link>
          <button onClick={handleDeleteFilm(film._id)} style={styledButton}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default MovieCard;
