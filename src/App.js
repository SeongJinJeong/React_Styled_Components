import React,{Component} from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin : 0px;
    padding : 0px;
  }
`;


class App extends Component{
  render(){
    return(
      <>
        <GlobalStyle />
        <Container>
          <Button>Safe!</Button>
          <Button danger>Warning!</Button>
          <Anchor as='a' href="https://google.com">Go To Google</Anchor>
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  text-align: center;
`

const Button = styled.button`
  -webkit-appearance: none;
  border-radius: 50px;
  margin: 30px;
  min-width: 300px;
  min-height: 100px;
  color: white;
  font-size: 50px;
  font-weight: 600;
  $:active,
  $:focus {
    outline: none;
  };
  background-color: ${props =>(props.danger ? "red" : "green")};
`;

const Anchor = styled(Button)`
  text-decoration: none;
  padding: 10px;
`;


export default App;
