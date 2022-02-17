import React, {createContext, useContext, useState, useEffect} from 'react'
import httpRequest from '../services/httpRequest'
const FilmContext = createContext()

const FilmProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [film, setFilm] = useState({})
  const [isLoginSuccess, setIsLoginSuccess] = useState(false)
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
  const [isAddFilmSuccess, setIsAddFilmSuccess] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
  const [totalFilm, setTotalFilm] = useState()
  const [user, setUser] = useState({})

  const getDetailFilmById = async (id) => {
    if(!id) return
    const res = await httpRequest.get(`http://localhost:3000/api/film/${id}`)
    setFilm(res.data.data)
  }

  const fetchFilmsData = async () => {
    const res = await httpRequest.get(`http://localhost:3000/api/film?page=${page}?limit=10`)
    setTotalFilm(res.data.total)
    setTotalPage(Math.ceil(res.data.total / res.data.limit))
    setFilms(res.data.data)
  }

  const loginUser = async (data) => {
    const res = await httpRequest.post('http://localhost:3000/api/users/login', data)

    if(res.data.isSuccess) {
      setIsLoginSuccess(res.data.isSuccess)
      localStorage.setItem('token', res.data.token)
    }
  }

  const registerUser = async (data) => {
    const res = await httpRequest.post('http://localhost:3000/api/users/register', data)
    
    if(res.data.isSuccess) {
      setIsRegisterSuccess(res.data.isSuccess)
    }
  }

  const addFilm = async (data, token) => {
    const res = await httpRequest.post('http://localhost:3000/api/film', data, {
      headers: {
        'x-auth-token': token
      }
    })
    if(res.data.isSuccess) {
      setIsAddFilmSuccess(true)
    }
  }

  useEffect(() => {
    try {
      fetchFilmsData()
    } catch (error) {
      throw new Error(error)
    }
    // eslint-disable-next-line
  },[page])

  return (
    <FilmContext.Provider value={{films, film, setFilm, getDetailFilmById, loginUser, registerUser, isLoginSuccess,setIsLoginSuccess, isRegisterSuccess, addFilm, isAddFilmSuccess, page, setPage, totalPage, totalFilm, setUser, user}}>
      {children}
    </FilmContext.Provider>
  )
}

export const useFilmsContext = () => useContext(FilmContext)

export default FilmProvider