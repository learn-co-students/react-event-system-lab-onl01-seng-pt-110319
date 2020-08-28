import React, { Component } from 'react';


export default class Keypad  extends Component {
  
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     password: this.props.userPassword
  //   }
  // }

  enterPassword = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.enterPassword} placeholder="Enter Password">
        </input>
      </div>
    )
  }
}