import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './container/Login'
import Home from './container/Home'


const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />}/>
      <Route path="*" element={<Home />}/>  
    </Routes>
  )
}

export default App
