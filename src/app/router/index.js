import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

import App from '../App';
import Login from '../containers/Login';
import SignUp from '../containers/Login/SignUp';
import SignIn from '../containers/Login/SignIn';
import AuthorizedUser from '../containers/AuthorizedUser';
import Home from '../containers/Home';



import createStore from '../redux/store';
const store = createStore();
injectTapEventPlugin();

export const AppRouter = () => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>

            <Route component={Login}>
              <IndexRedirect to='signUp'/>
              <Route path='signIn' component={SignIn}/>
              <Route path='signUp' component={SignUp}/>
            </Route>

            <Route component={AuthorizedUser}>
              <Route path='home' component={Home}/>
            </Route>

          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
};



