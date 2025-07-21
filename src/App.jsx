import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import AppNavbar from './components/Navbar'

function App(){
  return(
    <AuthProvider>
      <Router>
        
          <AppNavbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        
    </Router>
    </AuthProvider>
  )
}
export default App;
