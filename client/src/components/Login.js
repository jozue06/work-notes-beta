import React, { Component, Fragment } from 'react';

export default class LogIn extends Component {

  state = {
    username: '',
    password: '',
  }

  handleChange = async (e) => {
   await this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.loginReq(this.state);
  }

  componentWillUnmount() {
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Welcome!</h1>
        <h3>Please log in</h3>

        <form onSubmit={this.handleSubmit}>

          <label>
            username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>

          <br />

          <label>
            password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>

          <br />

          <input type="submit" value="log in"/>

        </form>
      </Fragment>

    );
  }
}