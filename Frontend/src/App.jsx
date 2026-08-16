import React from 'react'
import Header from './components/Header'
import Page1 from './components/Page1'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Backbutton from './components/Backbutton'
import Login from './pages/Login'
import Moredetail from './pages/Moredetail'
import Addpeople from './pages/Addpeople'
import axios from "axios"
import Infobox from './components/Infobox'
import Gallery from './pages/Gallery'
const App = () => {
  return (
    <div className="font-sans">
      <Header/>
      <Backbutton/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/moredetail' element={<Moredetail/>}/>
        <Route path='/Addpeople' element={<Addpeople/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>


    </div>
  )
}

export default App
