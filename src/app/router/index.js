import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import createStore from '../redux/store';
const store = createStore();

import App from '../App';

export const AppRouter = () => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Router>
          <Route path='/' component={App}/>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
};



