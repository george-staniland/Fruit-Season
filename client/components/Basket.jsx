import React from 'react'

class Basket extends React.Component {
    state = {
      style: {}
    }
    // *For throwDataAround in Game*
    // componentDidMount() {
    //   this.props.throwDataAround('yo')
    // }

    componentDidMount(){
      this.props.getBasketDimensions()
    }

    // *other stuff to ponder on*

    // componentDidUpdate(prevprops){
    //   console.log(this.props)
    // }

    // componentDidMount() {
    //   this.interval = setInterval(() => { 
    //     this.setState({
    //       style : {
    //           ...this.state.style, top: clientY, left: clientX
    //       }
    //     }) 
    //    }, 10)
    //   }

    render(){
        return (
          <div className="basket" style={{
            top: this.props.y + 5,
            left: this.props.x - 45
          }}
          ></div>
        )
    }
    }

export default Basket


// make basket image follow mouse cursor

  // make div
  // set x and y of div to mouse x and y
  // set div height to screenheight - cursor y

// will get x and y of mouse

// will constantly update variables that make up the dimesnions of the basket

  // apples delete currently onMouseEnter={this.colectEvent} (function created in Apples)

// Export basket

// Will need x and y of apples to check if they fall within basket dimensions.

// Apples component will import basket dimensions so they can run colectEvent upon entering dimensions.

  // if fruit enters anywhere between these dimensions, delete apple

  // use AND to prevent basket deleting everything outside of dimensions