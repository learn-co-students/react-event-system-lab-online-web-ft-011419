import React from 'react';
class Keypad extends React.Component {

    //  handler for input with a console log at the event of input action
    handleInputPassword = () => console.log("'Entering password...")

    // render the return of the input.  Input type is a password.  On key up console log entering password.  
  render() {
    return ( 
    <div>
      <input type = "password"
      onKeyUp = { this.handleInputPassword }
      /> 
      </div>
    )
  }
}

export default Keypad;
