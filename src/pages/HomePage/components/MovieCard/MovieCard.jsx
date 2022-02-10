import React from 'react';

import { Card } from 'antd';

import { Link } from 'react-router-dom';
const MovieCard = ({movie}) => {

  const {Meta} = Card

  return (
    <Link to={`/movie/${movie.id}`}>
      <Card
      hoverable
      style={{ maxWidth: '300px', borderRadius: '10px', overflow: 'hidden'}}
      cover ={<img style={{height: '250px'}} src={movie.image} alt={movie.title} />}>
        <Meta title={movie.title} description={movie.description} />
      </Card>
    </Link>
  )
};

export default MovieCard;
