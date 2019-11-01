import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Album from './Album'
import Pic from './Pic'
import '../styles/styles.css'

function App(props) {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home}></Route>
        <Route path = '/albums/:id' component = {Album}></Route>
        <Route path = '/pic/:id' component = {Pic}></Route>
      </div>
    </Router>
  )
}

export default App
