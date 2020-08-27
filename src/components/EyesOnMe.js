import React from 'react'

class EyesOnMe extends React.Component {
    
    listenOnFocus = () => console.log("Good!")

    listenOnBlur = () => console.log("Hey! Eyes on me!");
    
    

    render() {
        return(
            <div>
                <button onFocus={this.listenOnFocus} onBlur={this.listenOnBlur}>
                    Eyes on me, please!
                </button>
            </div>
            )
    }
}

export default EyesOnMe;