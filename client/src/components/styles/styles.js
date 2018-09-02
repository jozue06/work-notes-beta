import styled from 'styled-components';


const Title = styled.h1`
  font-size: 0.8em;
  text-align: center;
  color: red;
  list-style-type: none;
`;

const Section = styled.div`

`

const Text = styled.p`
  font-size: 1em;
  text-align: center;
  color: white;
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
  
`;


const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${(props) => props.primary ? 'palevioletred' : 'white'};
  color: ${(props) => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 0.2em;
  padding: 0.25em 0.25em;
  border: 1px solid palevioletred;
  border-radius: 3px;
  text-align: center;
`;

const Editor = styled.textarea`
width: 30%;
height: 5em;
text-align: center;
`

const List = styled.li`
  color: white;
  font-size: 1.1em;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 5%;
  padding: 2em 2em; 
  background: palevioletred;
  border: 1px solid palevioletred;
  border-radius: 5px;
  text-align: center;
  list-style-type: none;
`

const Tiny = styled.p`
color: white;
font-size: 0.1em;
font-style: italic;
`

export default {
  Button,
  Title,
  Wrapper,
  Text,
  Link,
  Section,
  Editor,
  List,
  Tiny
};