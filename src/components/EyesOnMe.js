// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  textGood = () => (
    console.log('Good!')
  )

  eyesOnMeText = () => (
    console.log('Hey! Eyes on me!')
  )

  render() {
    return <button onFocus={this.textGood} onBlur={this.eyesOnMeText} />
  }
}
