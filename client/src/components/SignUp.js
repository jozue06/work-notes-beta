
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupReq } from '../reducers/auth';
import S from './styles/styles.js'

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    passwordCheck: '',
    email: '',
  }

  handleChange = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });

  }

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.password !== this.state.passwordCheck) {
      alert('passwords do not match!');
      this.setState({ password: '', passwordCheck: '' });
    } else {
      console.log('hit signup else')
      this.props.signupReq(this.state);
    }

  }

  componentWillUnmount() {
    this.setState({
      username: '',
      password: '',
      passwordCheck: '',
      email: '',
    });
  }

  render() {
    if (this.props.userState) {
      return <Redirect to='/dashboard' />;
    } else {
      return (
        <S.Wrapper>
          <S.Title>Create an account</S.Title>

          <form onSubmit={this.handleSubmit}>

            <label>
              username:
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            </label>

            <br />

            <label>
              email:
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </label>

            <br />

            <label>
              password:
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </label>

            <br />

            <label>
              confirm password:
              <input type="password" name="passwordCheck" value={this.state.passwordCheck} onChange={this.handleChange} />
            </label>

            <br />

            <S.Button type="submit" value="sign up">Sign Up</S.Button>
          </form>

        </S.Wrapper>

      );
    }
  }
}

const matchStateToProps = state => ({ userState: state.userState })

const matchDispatchToProps = dispatch => ({
  signupReq: newUser => dispatch(signupReq(newUser)),
});

export default connect(matchStateToProps, matchDispatchToProps)(SignUp);