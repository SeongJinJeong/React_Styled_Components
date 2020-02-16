import React,{Component} from 'react';
import styled, { createGlobalStyle, keyframes, css, ThemeProvider } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body{
    margin : 0px;
    padding : 0px;
  }
`;

const Input = styled.input.attrs({
  "required" : true
})`
  border-radius : 5px;
`;

const AwesomeCard = css`
  color : black;
`


class App extends Component{
  render(){
    return(
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <Button>Safe!</Button>
            <Button danger>Warning!</Button>
            <Anchor as='a' href="https://google.com">Go To Google</Anchor>
            <Input placeholder="Hello" />
          </Container>
        </ThemeProvider>
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
  ${props=>{
    if(props.danger){
    return css`
      animation : ${rotation} 2s linear infinite
    `
    }
  }}
`;

const Anchor = styled(Button)`
  text-decoration: none;
  padding: 10px;
  ${AwesomeCard};
  background-color:${props=>props.theme.warningColor}
`;

const rotation = keyframes`
  from {
    transform : rotate(0deg)
  }
  to {
    transform : rotate(360deg);
  }
`


export default App;
