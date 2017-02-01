import React from 'react';
import { css } from 'aphrodite';
import { mainAppStyles as S } from './style';
import MainNavBar from '../MainNavbar';


class App extends React.Component {
  render() {
    return (
      <div className={css(S.appWrapper)}>
        <div className={css(S.appMain, S.appSmallSize)}>
          <MainNavBar />

          <div className={css(S.appMainContainer, S.appMainContainerSmall)}>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default App;