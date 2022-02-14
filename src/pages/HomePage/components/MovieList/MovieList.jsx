import React from 'react';
import MovieCard from '../MovieCard/MovieCard'

import { List } from 'antd';

const MovieList = ({films}) => {
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
    dataSource={films}
    renderItem={
      film => (
        <List.Item key={film.key} >
          <MovieCard film={film}/>
        </List.Item>
      )
    }
    />
  )
};

export default MovieList;
