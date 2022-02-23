import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FilmProvider from './context/FilmContext';

import 'antd/dist/antd.min.css';
import './index.css';
ReactDOM.render(
  <FilmProvider>
    <App />
  </FilmProvider>,
  document.getElementById('root')
);
