// Code Keypad Component Here
import React, {Component} from "react";

export default class Keypad extends Component{

    eventHandler(){
        console.log('Entering password...')
    }
    
    render(){
            return (
            <div>
                <input onKeyUp={this.eventHandler} type="password"></input>
            </div>
            )
        }
    
}