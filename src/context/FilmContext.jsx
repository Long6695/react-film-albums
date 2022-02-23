import React, { createContext, useContext, useState, useEffect } from 'react';
import httpRequest from '../services/httpRequest';

import { URL } from '../api/api';
const token = localStorage.getItem('token');

const FilmContext = createContext();

const FilmProvider = ({ children }) => {
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState({});
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [isAddFilmSuccess, setIsAddFilmSuccess] = useState(false);
  const [isEditFilmSuccess, setIsEditFilmSuccess] = useState(false);
  const [totalPage, setTotalPage] = useState();
  const [totalFilm, setTotalFilm] = useState();
  const [user, setUser] = useState({});

  const getDetailFilmById = async (id) => {
    if (!id) return;
    try {
      setIsEditFilmSuccess(false);
      const res = await httpRequest.get(`${URL.default}/api/film/${id}`);
      setFilm(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFilmsData = async (page) => {
    const res = await httpRequest.get(
      `${URL.default}/api/film?page=${page}?limit=10`
    );
    setTotalFilm(res.data.total);
    setTotalPage(Math.ceil(res.data.total / res.data.limit));
    setFilms(res.data.data);
  };

  const loginUser = async (data) => {
    const res = await httpRequest.post(`${URL.default}/api/users/login`, data);

    if (res.data.isSuccess) {
      setIsLoginSuccess(res.data.isSuccess);
      localStorage.setItem('token', res.data.token);
    }
  };

  const registerUser = async (data) => {
    const res = await httpRequest.post(
      `${URL.default}/api/users/register`,
      data
    );

    if (res.data.isSuccess) {
      setIsRegisterSuccess(res.data.isSuccess);
    }
  };

  const addFilm = async (data, token) => {
    const res = await httpRequest.post(`${URL.default}/api/film`, data, {
      headers: {
        'x-auth-token': token,
      },
    });
    if (res.data.isSuccess) {
      setIsAddFilmSuccess(true);
    }
  };

  const handleDeleteFilmById = async (id, token) => {
    try {
      await httpRequest.delete(`${URL.default}/api/film`, id, {
        headers: {
          'x-auth-token': token,
        },
      });
      setFilms(films.filter((film) => film._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFilmById = async (id, token, data) => {
    try {
      await httpRequest.put(`${URL.default}/api/film`, id, data, {
        headers: {
          'x-auth-token': token,
        },
      });
      setIsEditFilmSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const checkUser = async (token) => {
    const res = await httpRequest.post(
      `${URL.default}/api/auth`,
      {},
      {
        headers: {
          'x-auth-token': token,
        },
      }
    );

    if (res.data.isSuccess) {
      setUser(res.data.user);

      setIsLoginSuccess(true);
    } else {
      setIsLoginSuccess(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    checkUser(token);
    // eslint-disable-next-line
  }, [token]);

  return (
    <FilmContext.Provider
      value={{
        fetchFilmsData,
        films,
        film,
        setFilm,
        getDetailFilmById,
        loginUser,
        registerUser,
        isLoginSuccess,
        setIsLoginSuccess,
        isRegisterSuccess,
        addFilm,
        isAddFilmSuccess,
        setIsAddFilmSuccess,
        totalPage,
        totalFilm,
        setUser,
        user,
        handleDeleteFilmById,
        handleEditFilmById,
        isEditFilmSuccess,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};

export const useFilmsContext = () => useContext(FilmContext);

export default FilmProvider;
