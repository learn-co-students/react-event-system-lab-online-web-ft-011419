import React, { Component } from 'react';

class Keypad extends Component {

    passwordAlert = () => {console.log("Entering password...")}

    render() {
        return (
            <input type="password" onKeyUp={this.passwordAlert}></input>
        )
    }
}

export default Keypad



