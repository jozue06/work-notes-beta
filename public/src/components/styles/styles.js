import styled from 'styled-components';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
  list-style-type: none;
`;

const Text = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  list-style-type: none;
`;

const Link = styled.a`
color: palevioletred;  
text-align: center;
list-style-type: none;

`;

const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
  background: papayawhip;
  list-style-type: none;
`;

const Ups = styled.p`
font-size: .5em;
`;

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${(props) => props.primary ? 'palevioletred' : 'white'};
  color: ${(props) => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-align: center;
`;

export default {
  Button,
  Title,
  Wrapper,
  Text,
  Link,
  Ups,
};