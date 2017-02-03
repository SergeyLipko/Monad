import React from 'react';
import { Link } from 'react-router-dom'
import { css } from 'aphrodite';
import { TextField, RaisedButton } from 'material-ui';
import { mainAppStyles as S } from './style';
import { loginForm } from '../../../utils/textCaptions';
import { fieldValidate, EMAIL_REGEXP, PASSWORD_REGEXP } from '../../../utils/regExp';


class SignUp extends React.Component {
  state = {
    login: '',
    password: '',
    confirmPassword: '',
    errors: {
      login: false,
      password: false,
      confirmPassword: false,
    }
  };

  render() {
    let { login, password, confirmPassword, errors } = this.state;

    return (
      <div className={css(S.loginCard)}>
        <p className={css(S.loginCardLinks)}>
          { loginForm.createAccount }
          <Link to='/login/signIn'>
            <span className={css(S.loginLink)}>Login</span>
          </Link>
        </p>

        <TextField
          onBlur={() => this._onFieldBlur('login', EMAIL_REGEXP)}
          errorText={errors.login && loginForm.emailIncorrect}
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this._onFieldChange('login')}
          value={login}
          hintText='Login'/>
        <TextField
          onBlur={() => this._onFieldBlur('password', PASSWORD_REGEXP)}
          errorText={errors.password && loginForm.passwordIncorrect}
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


  fieldValidate = validateFunc => (errorField, regExpType) => {
    this.setState(state => {
      return {
        errors: {
          ...state.errors,
          [errorField]: !validateFunc(state[errorField], regExpType)
        }
      }
    });
  };

  _onFieldBlur = this.fieldValidate(fieldValidate);


  _onFieldChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };
}

export default SignUp;