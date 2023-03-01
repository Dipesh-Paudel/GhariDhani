import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './components/register'
import Login from './components/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:4000/'
axios.defaults.withCredentials = true;
function App() {

  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
