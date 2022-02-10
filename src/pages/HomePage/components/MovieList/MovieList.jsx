import React from 'react';
import MovieCard from '../MovieCard/MovieCard'

import { List } from 'antd';

const MovieList = ({movies}) => {
  return (
    <List
    style={{padding: '20px'}}
    grid ={{
      gutter: 16,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
    }}
    dataSource={movies}
    renderItem={
      movie => (
        <List.Item key={movie.key} >
          <MovieCard movie={movie}/>
        </List.Item>
      )
    }
    />
  )
};

export default MovieList;
