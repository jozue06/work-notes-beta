import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
  background: papayawhip;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class Header extends React.Component {
    render() {
      return (
        <Head>
         The ISR Helper
        </Head>
      );
    }
  }

export default Header;