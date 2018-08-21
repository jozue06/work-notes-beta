import React from 'react';
import S from '../components/styles/styles.js'
import Header from './Header'
import Footer from './Footer'
import NotesContainer from './Notes/NotesContainer';

class Dashboard extends React.Component{


      
  render(){
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
};


export default Dashboard;

