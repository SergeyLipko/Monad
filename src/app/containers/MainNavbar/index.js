import React from 'react';
import { css } from 'aphrodite';
import { MainNavBarStyles as S } from './style';

const FaSearch = require('react-icons/lib/fa/search');
const MdSettings = require('react-icons/lib/md/settings');
const MdInfoOutline = require('react-icons/lib/md/info-outline');
const FaUser = require('react-icons/lib/fa/user');

import MNBarItem from './NavBarItem';



class MainNavBar extends React.Component {
  render() {
    const { hideNavigation } = this.props;

    return (
      <div className={css(S.MN_Wrapper)}>
        <div className={css(S.MN_LogoWrapper)}>
          <span className={css(S.MN_LogoText)}>
            Monad
          </span>
        </div>

        { !hideNavigation &&
          <ul className={css(S.MN_AppNav)}>
            <MNBarItem>
              <FaSearch className={css(S.MN_AppNavItemIcon)}/>
            </MNBarItem>
            <MNBarItem>
              <MdSettings className={css(S.MN_AppNavItemIcon)}/>
            </MNBarItem>
            <MNBarItem>
              <MdInfoOutline className={css(S.MN_AppNavItemIcon)}/>
            </MNBarItem>
            <MNBarItem>
              <FaUser className={css(S.MN_AppNavItemIcon)}/>
            </MNBarItem>
          </ul>
        }
      </div>
    )
  }
}

export default MainNavBar;