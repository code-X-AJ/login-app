import React from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import './styles.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={
        <Dashboard />
      } />
    </Routes>

  )
}
export default App

