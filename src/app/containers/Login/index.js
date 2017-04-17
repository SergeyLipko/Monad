import React from 'react';
import { css } from 'aphrodite';
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
                  Welcome to *App*
                </h3>
                <p className={css(S.loginCardText)}>
                  *App* is an awesome app designed
                  for all your goals! Create an account and enjoy it!
                </p>
              </div>

              <div className={css(S.loginCardContent)}>
                { this.props.children }
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;



