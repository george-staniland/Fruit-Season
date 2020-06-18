import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Home extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="sky">

        <div className="playbut center animate__animated animate__backInDown">
          <Link to="game" className="playlink">PLAY</Link>
        </div>
      </div>
    )
  }

}

export default Home