import React, { Component } from 'react';

export default class KeyPad extends Component {

  enteringPassword = () => console.log('Entering password...')

  render() {
    return (
      <input type="password" onKeyUp={this.enteringPassword} />
    )
  }
}