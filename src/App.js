import MainLayout from './Layout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout><HomePage /></MainLayout>}/>
        <Route path='/register' element={<MainLayout><RegisterPage /></MainLayout>}/>
        <Route path='/login' element={<MainLayout><LoginPage /></MainLayout>}/>
        <Route path='/movie/:id' element={<MainLayout><MovieDetail /></MainLayout>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
