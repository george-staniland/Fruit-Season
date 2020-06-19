import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Home extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="sky">

        <div className="gameTitle">
        <h1>Fruit Season!</h1>
        </div>
        
        
        <div className="play button animate__animated animate__backInDown">
          <Link to="game" className="playlink">PLAY</Link>
        </div>
      </div>
    )
  }

}

export default Home