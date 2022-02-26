import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// context
import { useFilmsContext } from './context/FilmContext';

// layout
import MainLayout from './Layout/MainLayout';

// pages
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Authenticate from './auth/Authenticate';
import AddFilm from './pages/AddFilm/AddFilm';
import EditFilm from './pages/EditFilm/EditFilm';

// guards
import AuthGuards from './guards/AuthGuards';
import GuestGuard from './guards/GuestGuards';

const App = () => {
  const { films } = useFilmsContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <AuthGuards>
                <HomePage films={films} />
              </AuthGuards>
            </MainLayout>
          }
        />

        <Route
          path="/add-film"
          element={
            <MainLayout>
              <AuthGuards>
                <AddFilm />
              </AuthGuards>
            </MainLayout>
          }
        />

        <Route
          path="/register"
          element={
            <MainLayout>
              <GuestGuard>
                <RegisterPage />
              </GuestGuard>
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MainLayout>
              <GuestGuard>
                <LoginPage />
              </GuestGuard>
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
              <AuthGuards>
                <EditFilm />
              </AuthGuards>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
