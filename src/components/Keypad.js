// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {
    

    handleInputPassword = () => {
        console.log('Entering password...')
    }

    render () {
        return (
            <input type="password"
                onKeyUp={this.handleInputPassword} />
        )

    }
}

export default Keypad

//handleInputPassword is an event handler that listens for the keyUp event
// onKeyUp is the event. anything with "on" infront of it is an event