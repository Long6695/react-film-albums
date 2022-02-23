import React from 'react';
import MainLayout from './Layout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Authenticate from './auth/Authenticate';
import AddFilm from './pages/AddFilm/AddFilm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFilmsContext } from './context/FilmContext';
import EditFilm from './pages/EditFilm/EditFilm';

const App = () => {
  const { films } = useFilmsContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage films={films} />
            </MainLayout>
          }
        />

        <Route
          path="/add-film"
          element={
            <MainLayout>
              <AddFilm />
            </MainLayout>
          }
        />

        <Route
          path="/register"
          element={
            <MainLayout>
              <RegisterPage />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MainLayout>
              <LoginPage />
            </MainLayout>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <MainLayout>
              <Authenticate>
                <MovieDetail />
              </Authenticate>
            </MainLayout>
          }
        />

        <Route
          path="/edit/:id"
          element={
            <MainLayout>
              <Authenticate>
                <EditFilm />
              </Authenticate>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
