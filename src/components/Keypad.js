import React, { Component } from 'react'

export default class Keypad extends Component {

    keyEvent = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <input onKeyUp={this.keyEvent} type="password"></input>
        )
    }

}