import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const { selectedIndex } = this.state;
    const { options } = this.props;

    if (e.key === 'ArrowDown') {
      this.setState({
        selectedIndex: (selectedIndex + 1) % options.length
      });
    } else if (e.key === 'ArrowUp') {
      this.setState({
        selectedIndex: (selectedIndex - 1 + options.length) % options.length
      });
    }
  }

  render() {
    const { selectedIndex } = this.state;
    const { options } = this.props;

    return (
      <div onKeyDown={this.handleKeyDown}>
        <input
          type='text'
          value={options[selectedIndex]}
          readOnly
        />
        <ul>
          {options.map((option, index) => (
            <li key={index} className={index === selectedIndex ? 'selected' : ''}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Input;