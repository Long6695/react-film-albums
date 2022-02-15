import React, {createContext, useContext, useState, useEffect} from 'react'
import httpRequest from '../services/httpRequest'

const FilmContext = createContext()

const FilmProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [film, setFilm] = useState({})

  const getDetailFilmById = async (id) => {
    if(!id) return
    const res = await httpRequest.get(`http://localhost:3000/api/film/${id}`)
    setFilm(res.data.data)
  }

  const fetchFilmsData = async () => {
    const res = await httpRequest.get('http://localhost:3000/api/film')
    setFilms(res.data.data)
  }

  const loginUser = async (data) => {
    const res = await httpRequest.post('http://localhost:3000/api/users/login', data)

    if(res.data.isSuccess) {
      localStorage.setItem('token', res.data.token)
    }
  }

  const registerUser = async (data) => {
    const res = await httpRequest.post('http://localhost:3000/api/users/register', data)
    console.log(res)
  }

  const decodedToken = async (token) => {
    if(!token) return
    const res = await httpRequest.checkToken('http://localhost:3000/api/auth', 
    {
      headers: {
        'x-auth-token': token
      }
    }
    )
    console.log(res)
  }

  useEffect(() => {
    try {
      fetchFilmsData()
    } catch (error) {
      throw new Error(error)
    }
  },[])

  return (
    <FilmContext.Provider value={{films, film, setFilm, getDetailFilmById, loginUser, registerUser, decodedToken}}>
      {children}
    </FilmContext.Provider>
  )
}

export const useFilmsContext = () => useContext(FilmContext)

export default FilmProvider