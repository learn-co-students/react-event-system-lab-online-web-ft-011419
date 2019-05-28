import React from 'react';

class Keypad extends React.Component {

  passwordInput = () => console.log("Entering password...")


  render() {
    return (
      <input type="password" onKeyUp={this.passwordInput} />
    )
  }
}

export default Keypad;
