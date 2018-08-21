import styled from 'styled-components';


const Title = styled.h1`
  font-size: 0.8em;
  text-align: center;
  color: red;
  list-style-type: none;
`;

const Section = styled.div`
  color: white;
  font-size: 1.1em;
  margin: 0.1em;
  padding: 0.25em 0.25em;
  background: palevioletred;
  border: 1px solid palevioletred;
  border-radius: 3px;
  text-align: center;
`

const Text = styled.p`
  font-size: 1em;
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


const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${(props) => props.primary ? 'palevioletred' : 'white'};
  color: ${(props) => props.primary ? 'white' : 'palevioletred'};

  font-size: 0.3em;
  margin: 0.2em;
  padding: 0.25em 0.25em;
  border: 1px solid palevioletred;
  border-radius: 3px;
  text-align: center;
`;

export default {
  Button,
  Title,
  Wrapper,
  Text,
  Link,
  Section,
};