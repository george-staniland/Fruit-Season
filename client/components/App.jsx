//react imports
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
//components
import Home from "./Home"
import Game from "./Game"


const App = () => {
  return (
    <>
      <Router>
        <h1>APP</h1>
        <Route path="/home" component={Home} />
        <Route path="/game" component={Game} />
        {/* <Route path="/game" component={Game} /> */}
      </Router>
    </>
  )
}

export default App
