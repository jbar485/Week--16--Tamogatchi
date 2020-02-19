import React from "react";

class Pet extends React.Component{

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      totalHealth: 10,

    };
    this.increaseHealth = this.increaseHealth.bind(this);
  }
increaseHealth(){
  let newHealthNumber = this.state.totalHealth
  newHealthNumber += 1
  this.setState({totalHealth: newHealthNumber})
}


render(){

  return(
    <div>
    <h4> {this.props.name}</h4>
    <div>
    <p>{this.state.totalHealth}</p>
    <p onClick={this.increaseHealth}> 👍</p>
    </div>
    </div>

  );
}
}
export default Pet;
