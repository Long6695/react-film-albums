import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFilmsContext } from '../context/FilmContext'
const Authenticate = ({children}) => {
  const {decodedToken} = useFilmsContext()
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    if(!token) {
      navigate('login')
      return
    }

    try {
      decodedToken(token)
    } catch (error) {
      throw new Error(error)
    }
    // eslint-disable-next-line
  },[token])

  return (
    <div>
      {children}
    </div>
  )
}

export default Authenticate