import React from 'react'
import MainLayout from './Layout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFilmsContext } from './context/FilmContext';

const App = () => {
  const {films} = useFilmsContext()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout><HomePage films={films} /></MainLayout>}/>
        <Route path='/register' element={<MainLayout><RegisterPage /></MainLayout>}/>
        <Route path='/login' element={<MainLayout><LoginPage /></MainLayout>}/>
        <Route path='/movie/:id' element={<MainLayout><MovieDetail /></MainLayout>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
