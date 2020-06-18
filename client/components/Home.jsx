import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Home extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="home box">

        <h2>HOME PAGE</h2>
        <p>stuff</p>
        <Link to="game">PLAY</Link>
      </div>
    )
  }

}

export default Home