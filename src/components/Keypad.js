// Code Keypad Component Here
import React, {Component} from "react";

export default class Keypad extends Component {

    keyUpMessage=()=>(console.log("Entering password..."))  
  

    render (){
        return (
            <input onKeyUp={this.keyUpMessage} type="password"></input>
        )
    }

}