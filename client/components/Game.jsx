import React from 'react'
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Apple from "./Apple"

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
  }
  
  render() {
    
    return (
      <div className="sky">

        <div className="button home  animate__animated animate__bounceInDown">
          <Link to="Home" className="playlink">Home</Link>

        </div>
        
      <div className="board">{this.state.score}</div>
        {
        Array.from({length: 10}, (item, i) => <Apple key={i} addscore={this.updateScore}/>)
        }
       

      </div>
    )
  }

}

export default Game