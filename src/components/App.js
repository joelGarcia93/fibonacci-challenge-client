import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import fibonacci from '../apis/fibonacci';

class App extends React.Component {
  state = { value: null, time: null };

  getValue = async index => {
    const response = await fibonacci.post('/fib', { index });
    const { value, time } = response.data;
    this.setState({ value, time });
  };

  renderContent() {
    const { value, time } = this.state;
    if (value != null && time != null) {
      return (
        <>
          <h1>Value: { value }</h1>
          <h2>Time: { time }</h2>
        </>
      );
    } else {
      return <h4>Please search the index you wanna find in the fibonacci serie</h4>;
    }
  }

  render() {
    return(
      <div className="container">
        <SearchBar getValue={this.getValue}/>
        { this.renderContent() }
      </div>
    );
  }
}

export default App;
