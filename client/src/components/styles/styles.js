import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
  background: papayawhip;
`;

const Input = styled.div`
  font-size: 1em;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  font-style: italic;
  list-style-type: none;
`;

const Editor = styled.textarea`
  width: 30%;
  height: 5em;
  text-align: center;
`;

const Text = styled.pre`
  font-size: 1em;
  text-align: center;
  color: white;
  padding: 10%;
  
  border-color:papayawhip;
  border: solid;
  border-width: .01em;
`;


const Link = styled.a`
  color: palevioletred;  
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
  list-style-type: none;
`;

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
`;
const Tiny = styled.p`
  color: white;
  font-size: 0.1em;
  font-style: italic;
`;

export default {
  Button,
  Title,
  Wrapper,
  Text,
  Link,
  Input,
  Editor,
  List,
  Tiny
};
