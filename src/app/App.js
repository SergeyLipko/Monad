import React from 'react';
import { LOGIN_ROUTES, getRoutes } from './utils/routerConfig';
import './styles.css';




class App extends React.Component {
  render() {
    return (
      <div>
        { getRoutes(LOGIN_ROUTES) }
      </div>
    );
  }
}

export default App;

