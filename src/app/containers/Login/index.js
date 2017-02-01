import React from 'react';
import { css } from 'aphrodite';
import { mainAppStyles as S } from './style';
import MainNavBar from '../MainNavbar';


class Login extends React.Component {
  render(){
    return (
      <div className={css(S.appWrapper)}>
        <div className={css(S.appMain)}>
          <MainNavBar hideNavigation />


        </div>
      </div>
    )
  }
}

export default Login;