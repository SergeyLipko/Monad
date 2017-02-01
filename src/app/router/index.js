import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import createStore from '../redux/store';
const store = createStore();


import App from '../App';
import Login from '../containers/Login';
import AuthorizedUser from '../containers/AuthorizedUser';
import Designers from '../containers/Designers';
import Products from '../containers/Products';
import Calendar from '../containers/Calendar';




export const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>

          <Route path='login' component={Login}>

          </Route>

          <Route path='authorized' component={AuthorizedUser}>
            <Route path='designers' component={Designers}/>
            <Route path='products' component={Products}/>
            <Route path='calendar' component={Calendar}/>
          </Route>

        </Route>
      </Router>
    </Provider>
  )
};

