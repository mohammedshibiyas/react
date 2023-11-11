
import React, { Component } from 'react';

class Uncontrolled extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleButtonClick = () => {
    alert('Input value: ' + this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleButtonClick}>Get Input Value</button>
      </div>
    );
  }
}

export default Uncontrolled;

