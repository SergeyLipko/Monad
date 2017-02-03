import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App';


import createStore from '../redux/store';
const store = createStore();
injectTapEventPlugin();


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



