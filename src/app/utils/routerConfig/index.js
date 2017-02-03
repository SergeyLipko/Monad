import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../../containers/Login';
import SignUp from '../../containers/Login/SignUp';
import SignIn from '../../containers/Login/SignIn';


export const ROUTES = [
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

export const GetRoutes = ({ routes }) => {
  return (
    <div>
      {
        routes.map((route, i) => {
          return <RenderRoute key={i} {...route}/>
        })
      }
    </div>
  )
};



