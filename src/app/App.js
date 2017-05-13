import React from 'react';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div> { this.props.children } </div>
    );
  }
}

export default App;

