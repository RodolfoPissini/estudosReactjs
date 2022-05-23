import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --background-original: #0062BE;
    --background-diet: #E60C2C;
    --background-black: #1E1E1E;
    --background-Content: #FFF;

    --text: #fff;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'poppins', sans-serif;
  }

  html{
    @media(max-width: 1080px){
      font-size:93.75%
    }
    @media(max-width: 720px){
      font-size:89.5%;
    }
  }

  body{
    padding: 0 5rem;
    justify-content: center;
    max-height: 100vh;
    background: ${(props)=> props.color ? props.color : '#0062BE'};
    -webkit-font-smoothing: antialiased;

  }

  button{
    cursor: pointer;
  }

  [disabled]{
    cursor: not-allowed;
  }

`;