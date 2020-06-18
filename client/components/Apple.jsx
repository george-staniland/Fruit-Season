import React from 'react'


function drop() {
  console.log()
}
function whois(data) {
  console.log(data)
}
class Apple extends React.Component {
  state = {
    moveobj: "none",
    level: 0
  }

  componentDidMount() {
    console.log("Spawned apple")
    this.interval = setInterval(() => { drop() }, 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <div className="fruit" onLoad={whois(this)}>

      </div>
    )
  }

}

export default Apple