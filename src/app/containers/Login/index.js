import React from 'react';
import { css } from 'aphrodite';
import { LOGIN_ROUTES, getRoutes } from '../../utils/routerConfig';
import { mainAppStyles as S } from './style';
import MainNavBar from '../MainNavbar';


class Login extends React.Component {
  render(){
    return (
      <div className={css(S.appWrapper)}>
        <div className={css(S.appMain, S.appSmallSize)}>
          <MainNavBar hideNavigation />
          <div className={css(S.loginWrapper, S.loginWrapperSmall)}>

            <div className={css(S.loginCardWrapper)}>
              <div className={css(S.loginCardHead)}>
                <h3 className={css(S.loginCardMainTitle)}>
                  Welcome to Monad
                </h3>
                <p className={css(S.loginCardText)}>
                  Monad is an awesome note app designed
                  for easily creating, storing and editing
                  your notes
                </p>
              </div>

              <div className={css(S.loginCardContent)}>
                { getRoutes(LOGIN_ROUTES[0].loginRoutes) }
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;

