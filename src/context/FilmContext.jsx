import React, {createContext, useContext, useState, useEffect} from 'react'
import httpRequest from '../services/httpRequest'
const FilmContext = createContext()

const FilmProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [film, setFilm] = useState({})
  const [isLoginSuccess, setIsLoginSuccess] = useState(false)
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)

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

  useEffect(() => {
    try {
      fetchFilmsData()
    } catch (error) {
      throw new Error(error)
    }
  },[])

  return (
    <FilmContext.Provider value={{films, film, setFilm, getDetailFilmById, loginUser, registerUser, isLoginSuccess,setIsLoginSuccess, isRegisterSuccess}}>
      {children}
    </FilmContext.Provider>
  )
}

export const useFilmsContext = () => useContext(FilmContext)

export default FilmProvider