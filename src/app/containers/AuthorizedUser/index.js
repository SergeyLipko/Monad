import React from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { mainAppStyles as S } from './style';
import { checkUserToken } from '../../redux/modules/session';
import MainNavBar from '../MainNavbar';

const mapDispatchToProps = dispatch => ({
  checkUserAuthentication: () => dispatch(checkUserToken()),
});

class App extends React.Component {
  componentWillMount() {
    this.props.checkUserAuthentication();
  }

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

export default connect(null, mapDispatchToProps)(App);