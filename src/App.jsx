import React from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import Footer from './components/Footer'
import 'leaflet/dist/leaflet.css';
import AboutPage from './pages/AboutPage'
import LeafletMap from './pages/LeafletMap'
import LoginPage from './pages/LoginPage'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/blog/:id' element={<BlogPage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
      <LeafletMap/>
      <Footer/>
    </div>
  )
}

export default App