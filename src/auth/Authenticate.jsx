import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom'
import httpRequest from '../services/httpRequest';
import { useFilmsContext } from '../context/FilmContext';
const Authenticate = ({children}) => {
  const [user, setUser] = useState({})
  const token = localStorage.getItem('token')
  const {setIsLoginSuccess} = useFilmsContext()
  const navigate = useNavigate()

  useEffect(() => {
    const checkUser = async () => {
      const res = await httpRequest.post('http://localhost:3000/api/auth',{},{
        headers: {
          'x-auth-token': token
        }
      })

      if(res.data.isSuccess) {
        setUser(res.data.user)
        
        setIsLoginSuccess(true)
      }else {
        navigate('login')
        
        setIsLoginSuccess(false)
      }
    }
    checkUser()

    return () => {
      setUser({})
    }
    // eslint-disable-next-line
  },[token])

  if(Object.values(user).length === 0) {
    return <Modal link={'/login'}>Please login to watch movies</Modal>
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Authenticate