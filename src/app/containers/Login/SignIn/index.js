import React from 'react';
import { Link } from 'react-router-dom'
import { css } from 'aphrodite';
import { TextField, RaisedButton } from 'material-ui';
import { mainAppStyles as S } from './style';


class SignIn extends React.Component {
  state = {
    login: '',
    password: '',
  };

  render() {
    let { login, password } = this.state;

    return (
      <div className={css(S.loginCard)}>
        <p className={css(S.loginCardLinks)}>
          You can login or create an account
          <Link to='/login/signUp'>
            <span className={css(S.loginLink)}>Sign Up</span>
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
        <RaisedButton
          backgroundColor={'#45a7b9'}
          labelStyle={{color: '#fff'}}
          className={css(S.loginCardButton)}
          label="Log In" />
      </div>
    )
  }

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };
}

export default SignIn;