import React, { Component } from 'react';
import {  Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import S from './styles/styles.js'
import { loginReq, logoutReq, signupReq, loginAuth } from '../reducers/auth';
import Login from '../components/Login.js';
class Landing extends Component {

  componentDidMount() {
    if(localStorage && localStorage.token) {
      let token = localStorage.token
      this.props.loginAuth(token);
    }
  }
  
  
  render() {
    return (
      <S.Wrapper>
        {!this.props.userState ? <Login loginReq={this.props.loginReq}/> : <Redirect to={{pathname: '/dashboard'}}/>}
        <p>Don't have an account? <Link to='/signup'>Create an Account</Link></p>
      </S.Wrapper>
    );
  }
}
const mapStateToProps = state => ({ userState: state.userState });
const mapDispatchToProps = dispatch => ({
  loginReq: user => dispatch(loginReq(user)),
  loginAuth: user => dispatch(loginAuth(user)),
  logoutReq: user => dispatch(logoutReq(user)),
  signupReq: user => dispatch(signupReq(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);