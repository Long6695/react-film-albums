import React from 'react';
import MovieList from './components/MovieList/MovieList';
import {Carousel } from 'antd';
const data = [
  {
    id: 1,
    image: 'https://amp.ex-cdn.com/EXP/media.mgn.vn/resize/560x315/files/news/2020/09/11/review-marvels-avengers-biet-doi-sieu-anh-hung-tap-hop-175749.jpg',
    description: 'Avengers is the best movie',
    title: 'Avengers',
  },
  {
    id: 2,
    image: 'https://media-cdn.laodong.vn/storage/newsportal/2019/8/21/750466/Sinh-Nhat-Mot-Ong-Em-01.jpg',
    description: 'Spider man is the best movie',
    title: 'Spider man',
  },
  {
    id: 3,
    image: 'https://media-cdn.laodong.vn/storage/newsportal/2021/12/10/983341/Phim-The-Witcher-2.jpg?w=720&crop=auto&scale=both',
    description: 'The Witcher is the best movie',
    title: 'The Witcher',
  },
  {
    id: 4,
    image: 'https://a1.cdn.japantravel.com/photo/50097-188699/1440x960!/tokyo-one-piece-halloween-188699.jpg',
    description: 'One piece is the best movie',
    title: 'One piece',
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzGx8UiqR6oLoEsmzhdvCGBQ6Y5OVty5L_w&usqp=CAU',
    description: 'Naruto is the best movie',
    title: 'Naruto',
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9qWHn0FKtj620LkjaxyQa6zaWc-aFeB2og&usqp=CAU',
    description: 'Supperman is the best movie',
    title: 'Supperman',
  },
]

const contentStyle = {
  width: '100%',
  height: '400px',
  background: '#1d2d44',
};

const HomePage = () => {
  return (
    <div style={{backgroundColor:'#1d2d44'}}>
      <Carousel style={{height: '400px'}} autoplay>
        {data.map(movie => (
          <div key={movie.id} style={contentStyle}>
            <img style={{width: '100%', objectFit: 'center', height:'400px'}} src={movie.image} alt={movie.title} />
          </div>
        ))}
      </Carousel>
      <MovieList movies={data}/>
    </div>
  );
};

export default HomePage;
