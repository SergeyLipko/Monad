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
          You can create an account or
          <Link to='/login/signIn'>
            <span className={css(S.loginLink)}>Login</span>
          </Link>
        </p>
        <TextField
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this._onFieldChange('login')}
          value={login}
          hintText='Login'/>
        <TextField
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this._onFieldChange('password')}
          value={password}
          hintText='Password'/>
        <TextField
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this._onFieldChange('confirmPassword')}
          value={confirmPassword}
          hintText='Confirm password'/>
        <RaisedButton
          onClick={this.onValidate}
          backgroundColor={'#45a7b9'}
          labelStyle={{color: '#fff'}}
          className={css(S.loginCardButton)}
          label="Sign Up" />
      </div>
    )
  }

  onValidate = () => {
    let { login } = this.state;

    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    console.log(ck_email.test(login));
  };

  _onFieldChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };
}

export default SignUp;