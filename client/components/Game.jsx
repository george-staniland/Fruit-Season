import React from 'react'
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Apple from "./Apple"
import Basket from "./Basket"

class Game extends React.Component {
  state = {
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
  
  // *How to do this if I (Richard) need it :/
  // throwDataAround = (arg) => {
  //   console.log(arg)
  //   this.setState({
  //     passThis: arg
  //   })
  // }
  
  // *Put in render>return
  // |
  // V
  // <Basket throwDataAround={this.throwDataAround}/>
  
  // *and so on.
  // <Apple throwThisDataLast={this.state.passThis}/>

  render() {
    return (
      <div className="sky" onMouseMove={this.getMousePos}>

        <div className="button home  animate__animated animate__bounceInDown">
          <Link to="Home" className="playlink">Home</Link>

        </div>
        {
        Array.from({length: 10}, (item, i) => <Apple key={i}/>)
        }
        <Basket x={this.state.x} y={this.state.y}/>

      </div>
    )
  }

}

export default Game