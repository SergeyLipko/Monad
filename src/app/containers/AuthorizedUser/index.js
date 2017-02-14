import React from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { mainAppStyles as S } from './style';
import { checkUserToken } from '../../redux/modules/session';
import MainNavBar from '../MainNavbar';

import axios from 'axios';
import { getUser } from '../../api';


const mapDispatchToProps = dispatch => ({
  checkUserAuthentication: () => dispatch(checkUserToken()),
});

class App extends React.Component {
  // componentWillMount() {
  //   this.props.checkUserAuthentication();
  // }



  fakeAsync = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(console.log('fake async CL'))
      }, 2000);
      rej()
    });
  };


  getUser = userId => {
    return axios.get(`http://localhost:8080/api/user/${userId}`)
      .then(res => res.data)
      .catch(function (error) {
        return error;
      });
  };
  


  componentWillMount() {
    getUser('589829329713c72c98a58edd').then((res, rej) => {
      console.log(res);
    })
      .then(() => {
        return this.fakeAsync()
      })
      .then(() => {
        console.log('last');
      })
  }





  // let user = getUser('58982932971334ghghg23c72c98a58edd');
  // user.then((res, rej) => {
  // if(res) {
  //   console.log('User data', res);
  // }
  // if(rej) {
  //   console.log('Error', rej);
  // }





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