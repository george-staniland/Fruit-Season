import React from 'react'
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Apple from "./Apple"

class Game extends React.Component {
  state = {
    maxfruit: 20

  }
  render() {
    return (
      <div className="sky">

        <div className="button home  animate__animated animate__bounceInDown">
          <Link to="Home" className="playlink">Home</Link>

        </div>
        <Apple />

      </div>
    )
  }

}

export default Game