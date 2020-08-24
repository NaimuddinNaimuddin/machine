import React from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Page from './components/Page'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Page/>
      <Footer/>
    </div>
  )
}

export default App


