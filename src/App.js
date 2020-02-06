import React,{Component} from 'react';
import styled from 'styled-components';

class App extends Component{
  render(){
    return(
      <Container>
        <Button>Safe!</Button>
        <Button danger>Warning!</Button>
      </Container>
    )
  }
}

const Container = styled.div`
  height : 100vh;
  width : 100%;
  background-color : black;
  text-align : center;
`

const Button = styled.button`
  -webkit-appearance: none;
  border-radius : 10px;
  margin : 30px;
  min-width : 300px;
  min-height : 100px;
  color : white;
  font-size : 50px;
  $:active,
  $:focus {
    outline : none;
  }
  background-color : ${props =>props.danger ? "red" : "green"}
`;


export default App;
