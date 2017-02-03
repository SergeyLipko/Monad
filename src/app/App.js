import React from 'react';
import { ROUTES, GetRoutes } from './utils/routerConfig';
import './styles.css';




class App extends React.Component {
  render() {
    return (
      <div>
        <GetRoutes routes={ROUTES}/>
      </div>
    );
  }
}

export default App;

