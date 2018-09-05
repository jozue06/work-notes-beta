import React, { Component } from 'react';
import {  Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import S from './styles/styles.js'
import { loginReq, logoutReq, signupReq } from '../reducers/auth';
import Login from '../components/Login.js';
class Landing extends Component {

  componentDidMount() {

    console.log('loaded')
    if(localStorage && localStorage.token) {
      let user = JSON.parse(atob(localStorage.token.split('.')[1]));
      this.props.loginReq(user);
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
  logoutReq: user => dispatch(logoutReq(user)),
  signupReq: user => dispatch(signupReq(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);