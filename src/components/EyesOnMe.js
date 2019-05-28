import React from 'react';

class EyesOnMe extends React.Component {

  eyesOnFocus = () => console.log("Good!")

  eyesOnBlur  = () => console.log("Hey! Eyes on me!")


  render() {
    return (
      <button onFocus={this.eyesOnFocus} onBlur={this.eyesOnBlur}>HIT ME with your BEST SHOT </button>
    )
  }
}

export default EyesOnMe;
