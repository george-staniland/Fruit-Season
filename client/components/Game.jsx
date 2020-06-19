import React from 'react'
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Apple from "./Apple"
import Basket from "./Basket"

class Game extends React.Component {
  state = {
    maxfruit: 20,
    score: 0
  }

  updateScore = () => {
    console.log("updated score!", this.state.score)
    this.setState({
      score: this.state.score + 1
    })
    maxfruit: 20
  }
  getMousePos = (e) => {
    // console.log('screen', e.screenX)

    this.setState({
      x: e.clientX,
      y: e.clientY
    })
    // console.log('move', e.movementX)
  }
  
  render() {
    
    return (
      <div className="sky" onMouseMove={this.getMousePos}>

        <div className="button home  animate__animated animate__bounceInDown">
          <Link to="Home" className="playlink">Home</Link>

        </div>
        
      <div className="board">{this.state.score}</div>
        {
        Array.from({length: 10}, (item, i) => <Apple key={i} addscore={this.updateScore}/>)
        }
        <Basket x={this.state.x} y={this.state.y}/>

      </div>
    )
  }

}

export default Game