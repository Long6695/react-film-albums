import React, {createContext, useContext, useState, useEffect} from 'react'
import httpRequest from '../services/httpRequest'

const FilmContext = createContext()

const FilmProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [film, setFilm] = useState({})

  const getDetailFilmById = async (id) => {
    if(!id) return
    const res = await httpRequest.getFilms(`http://localhost:3000/api/film/${id}`)
    setFilm(res.data.data)
  }

  const fetchFilmsData = async () => {
    const res = await httpRequest.getFilms('http://localhost:3000/api/film')
    setFilms(res.data.data)
  }

  useEffect(() => {
    try {
      fetchFilmsData()
    } catch (error) {
      throw new Error(error)
    }
  },[])

  return (
    <FilmContext.Provider value={{films, film, setFilm, getDetailFilmById}}>
      {children}
    </FilmContext.Provider>
  )
}

export const useFilmsContext = () => useContext(FilmContext)

export default FilmProvider