import React from 'react';
import { Link } from 'react-router-dom'
import { css } from 'aphrodite';
import { TextField, RaisedButton } from 'material-ui';
import { mainAppStyles as S } from './style';


class SignUp extends React.Component {
  state = {
    login: '',
    password: '',
    confirmPassword: '',
  };

  render() {
    let { login, password, confirmPassword } = this.state;

    return (
      <div className={css(S.loginCard)}>
        <p className={css(S.loginCardLinks)}>
          You can create an account or Login
          <Link to='/login/signIn'>
            <span className={css(S.loginLink)}>Login</span>
          </Link>
        </p>
        <TextField
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this.handleChange('login')}
          value={login}
          hintText='Login'/>
        <TextField
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this.handleChange('password')}
          value={password}
          hintText='Password'/>
        <TextField
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this.handleChange('confirmPassword')}
          value={confirmPassword}
          hintText='Confirm password'/>
        <RaisedButton
          backgroundColor={'#45a7b9'}
          labelStyle={{color: '#fff'}}
          className={css(S.loginCardButton)}
          label="Sign Up" />
      </div>
    )
  }

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };
}

export default SignUp;