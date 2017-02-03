import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../../containers/Login';
import SignUp from '../../containers/Login/SignUp';
import SignIn from '../../containers/Login/SignIn';


export const LOGIN_ROUTES = [
  { path: '/login',
    component: Login,
    loginRoutes: [
      { path: '/login/signUp',
        component: SignUp
      },
      { path: '/login/signIn',
        component: SignIn
      }
    ]
  }
];



const RenderRoute = route => <Route path={route.path} component={route.component} />;

export const getRoutes = routes => {
  return routes.map((route, i) => {
    return <RenderRoute key={i} {...route}/>
  })
};



