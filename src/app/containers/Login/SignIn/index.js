import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { TextField, RaisedButton } from 'material-ui';
import { mainAppStyles as S } from './style';
import { loginUserRequest } from '../../../redux/modules/session';
import Spinner from '../../../components/Spinner';

const mapStateToProps = ({ session }) => ({
  isLoading: session.isLoading,
  loginStatus: session.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  loginUser: credentials => dispatch(loginUserRequest(credentials)),
});

class SignIn extends React.Component {
  state = {
    login: '',
    password: '',
    disableSubmit: true,
  };

  render() {
    let { login, password, disableSubmit } = this.state;
    let { loginStatus } = this.props;

    return (
      <div className={css(S.loginCard)}>
        <p className={css(S.loginCardLinks)}>
          You can login or
          <Link to='/signUp'>
            <span className={css(S.loginLink)}>Create an account</span>
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
          type='password'
          hintText='Password'/>
        <RaisedButton
          onClick={() => this.onSubmit()}
          disabled={disableSubmit}
          backgroundColor={'#45a7b9'}
          labelStyle={{color: '#fff'}}
          className={css(S.loginCardButton)}
          label="Log In" />

        { this.props.isLoading && <Spinner />}
        { loginStatus &&
        <span
          className={css(S.errorMsg)}>
            { loginStatus.message }
          </span>
        }

      </div>
    )
  }

  _checkFieldsEmpty = () => {
    let { login, password } = this.state;
    let isFieldsEmpty = login.length !== 0 && password.length !== 0;

    isFieldsEmpty
      ? this.setState({ disableSubmit: false })
      : this.setState({ disableSubmit: true })
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
    this._checkFieldsEmpty();
  };

  onSubmit = () => {
    let { login, password } = this.state;
    this.props.loginUser({ login, password });
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);