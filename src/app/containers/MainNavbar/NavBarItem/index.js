import React from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';
import { MainNavBarItemStyles as S } from './style';


const MainNavBarItem = ({ linkTo, children }) => {
  return (
    <li className={css(S.MN_AppNavItem)}>
      <Link
        to={linkTo}
        activeClassName="login-link-active">
        {children}
      </Link>
    </li>
  )
};

export default MainNavBarItem;