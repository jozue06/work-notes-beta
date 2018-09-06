import S from '../components/styles/styles.js'
import Header from './Header'
import Footer from './Footer'
import NotesContainer from './Notes/NotesContainer';

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutReq } from '../../src/reducers/auth';

// ******
class Dashboard extends Component {
  render() {
    return (
      this.props.userState ? <DashboardContent logoutReq={this.props.logoutReq} /> : <Redirect to={{ pathname: '/' }} />
    );
  }
}

const DashboardContent = () => {
  return (
   
      <main>
      <Header />
      <S.Wrapper>
        <NotesContainer />
      </S.Wrapper>
      <Footer />
      </main>
    
  );
};

const mapStateToProps = state => ({ userState: state.userState });

const mapDispatchToProps = dispatch => ({
  logoutReq: user => dispatch(logoutReq(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// ********




