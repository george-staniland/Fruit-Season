//react imports
import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'
//components
import Home from "./Home"
import Game from "./Game"
import Ground from "./Ground"


const App = () => {
  return (
    <>
      <Router>
      <Route  exact path="/" component={Home}/>
        <Route  path="/home" component={Home}/>
        <Route path="/game" component={Game} />
        <Ground />
        {/* <Route path="/game" component={Game} /> */}
      </Router>
    </>
    
    
  )
}



export default App



