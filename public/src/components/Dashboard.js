import React from 'react';
import S from '../components/styles/styles.js'
import Header from './Header'
import Footer from './Footer'
import CategoryContainer from './Category/CategoryContainer';

class Dashboard extends React.Component{


      
  render(){
  return (
    <main>
    <Header />
    <S.Wrapper>
      <CategoryContainer />
    </S.Wrapper>
    <Footer />
    </main>
  );
};
};


export default Dashboard;

