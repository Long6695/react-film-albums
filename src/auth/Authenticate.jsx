import React from 'react';
import Modal from '../components/Modal';
import { useFilmsContext } from '../context/FilmContext';
const Authenticate = ({ children }) => {
  const { user, isLoginSuccess } = useFilmsContext();

  return (
    <div>
      {isLoginSuccess && user ? (
        children
      ) : (
        <Modal link={'/login'}>Please login to watch movies</Modal>
      )}
    </div>
  );
};

export default Authenticate;
