import React from 'react'
import './App.css';
import {BrowserRouter as Router ,  Route } from 'react-router-dom'
import Home from './Components/Dashboard'
import Test from './Components/Test'

export default function App() {
  return (
    <div>
      <Router>   
           <Route exact path='/' component={Home}/> 
           <Route exact path='/test' component={Test}/> 
     </Router> 
    </div>
  )
}

