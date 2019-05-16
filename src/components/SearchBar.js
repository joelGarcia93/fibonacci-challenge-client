import React from 'react';
import './App.css';

class SearchBar extends React.Component {
  state = { index: '', max: '' };

  onInputIndexChange = event => {
    console.log('a');
    this.setState({ index: event.target.value });
  };

  onInputMaxChange = event => {
    console.log('b');
    this.setState({ max: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    var { index, max } = this.state;
    index = parseInt(index);
    max = parseInt(max);
    if (index >= 0 && index <= 100
      && typeof index == 'number'
      && max >= 2 && max <= 100
      && typeof index == 'number'
      && index <= max) {
      this.props.getValue(index, max);
    }
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>Index</label>
          <input
            className="input"
            type="number"
            value={this.state.index}
            onChange={this.onInputIndexChange}
          />

          <label>Max</label>
          <input
            className="input"
            type="number"
            value={this.state.max}
            onChange={this.onInputMaxChange}
          />

          <button type="submit">Accept</button>
        </div>
      </form>
    );
  }
};

export default SearchBar;
