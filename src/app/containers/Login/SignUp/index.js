import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { TextField, RaisedButton } from 'material-ui';
import { mainAppStyles as S } from './style';
import { regExpValidate, EMAIL_REGEXP, PASSWORD_REGEXP } from '../../../utils/validation';
import { createUser } from '../../../redux/modules/session';
import Spinner from '../../../components/Spinner';


const mapStateToProps = ({ session }) => ({
  isLoading: session.isLoading,
  registrationStatus: session.registrationStatus,
});

const mapDispatchToProps = dispatch => ({
  createNewUser: credentials => dispatch(createUser(credentials)),
});


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
          You can create an account or
          <Link to='/login/signIn'>
            <span className={css(S.loginLink)}>Login</span>
          </Link>
        </p>

        <TextField
          onBlur={() => this.onFieldBlur('login', EMAIL_REGEXP)}
          errorText={errors.login && 'Email address is incorrect or to short'}
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this.onFieldChange('login')}
          value={login}
          hintText='Login'/>
        <TextField
          onBlur={() => this.onFieldBlur('password', PASSWORD_REGEXP)}
          errorText={errors.password && 'Password is too short (6 - 20 characters)'}
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this.onFieldChange('password')}
          value={password}
          type='password'
          hintText='Password'/>
        <TextField
          onBlur={() => this.onConfirmPasswordBlur('confirmPassword')}
          errorText={errors.confirmPassword && 'Passwords does not match'}
          className={css(S.loginCardField)}
          underlineFocusStyle={{borderColor: '#45a7b9'}}
          onChange={this.onFieldChange('confirmPassword')}
          value={confirmPassword}
          type='password'
          hintText='Confirm password'/>
        <RaisedButton
          disabled={this.checkFieldsEmpty()}
          onClick={this.onSubmit}
          backgroundColor='#45a7b9'
          labelStyle={{color: '#fff'}}
          className={css(S.loginCardButton)}
          label="Sign Up" />

        { this.props.isLoading && <Spinner />}
        { this.renderStatusMessage() }
      </div>
    )
  }


  onFieldChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };

  checkFieldsEmpty = () => {
    let { login, password, confirmPassword } = this.state;
    return login.length === 0 || password.length === 0 || confirmPassword.length === 0;
  };


  confirmPasswordValidate = () => this.state.password === this.state.confirmPassword;

  fieldValidate = validateFunc => (errorField, regExpType) => {
    if (this.state[errorField].length !== 0){
      this.setState(state => {
        return {
          errors: {
            ...state.errors,
            [errorField]: !validateFunc(state[errorField], regExpType)
          }
        }
      });
    }
  };

  onFieldBlur = this.fieldValidate(regExpValidate);
  onConfirmPasswordBlur = this.fieldValidate(this.confirmPasswordValidate);

  confirmPasswordCheck = () => {
    if (!this.confirmPasswordValidate()){
      this.setState(state => {
        return {
          errors: {
            ...state.errors,
            confirmPassword: !this.confirmPasswordValidate()
          }
        }
      });
    }
    return this.confirmPasswordValidate();
  };


  onSubmit = () => {
    let { login, password, confirmPassword } = this.state.errors;
    this.confirmPasswordCheck();

    if (this.confirmPasswordCheck()){
      if (!login && !password && !confirmPassword){
        let { login, password } = this.state;
        this.props.createNewUser({ login, password });
      }
    }
  };


  renderStatusMessage = () => {
    let { registrationStatus } = this.props;

    switch(registrationStatus){
      case null:
        return <div />;
      case 'success':
        return <span className={css(S.statusMessage, S.success)}>
                User successfully created
               </span>;
      case 'failure':
        return <span className={css(S.statusMessage, S.failure)}>
                Error when creating user
               </span>;
      default:
        return <div />
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);