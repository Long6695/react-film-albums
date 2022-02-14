import React from 'react';

import { Card } from 'antd';

import { Link } from 'react-router-dom';

const MovieCard = ({film}) => {
  const {Meta} = Card

  return (
    <Link to={`/movie/${film._id}`}>
      <Card
      hoverable
      style={{ maxWidth: '300px', borderRadius: '10px', overflow: 'hidden'}}
      cover ={<img style={{height: '250px'}} src={film.banner} alt={film.title} />}>
        <Meta 
        style={{
          display: "inline-block",
          width: "180px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"}}
        title={film.title} 
        description={film.description} />
      </Card>
    </Link>
  )
};

export default MovieCard;
