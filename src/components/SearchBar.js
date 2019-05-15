import React from 'react';
import './App.css';

class SearchBar extends React.Component {
  state = { index: '' };

  onInputChange = event => {
    this.setState({ index: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.getValue(this.state.index);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          className="input"
          type="number"
          value={this.state.index}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
};

export default SearchBar;
