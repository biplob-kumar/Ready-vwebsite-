import {  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Kurier";
import Login from "./pages/Login";
// import Singup from "./pages/Singup";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {


  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route  path='/' element={<Home/>} />
  <Route  path='/about' element={<About/>} />
  <Route  path='/kurier' element={<Blog/>} />
  <Route  path='/login' element={<Login/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
