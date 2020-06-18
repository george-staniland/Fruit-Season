//react imports
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
//components
import Home from "./Home"
import Game from "./Game"
import Ground from "./Ground"


const App = () => {
  return (
    <>
      <Router>
        {/* Change home comp to render here */}
        <Home />
        <Route path="/game" component={Game} />
        <Ground />
        {/* <Route path="/game" component={Game} /> */}
      </Router>
    </>
  )
}

export default App
