import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
import {darken} from 'polished';

export const Container = styled.div`
  position: absolute;
  top: -12.42rem;
  left: -5.01rem;
  height: 100%;
  display: flex;
  z-index:5
`;

export const Background = styled.div`
  min-height:100vh;
  width: 100vw;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height:500px;
  box-shadow: 0 5px 1rem rgba(0,0,0,0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 0.25rem;
  
`;

export const ModalContent = styled.div`
  position: relative;

  form{
    margin-top:2rem;
    width: 800px;
    height:500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
  }
  h1{
    margin-right: 24rem;
    font-size:1.2rem;
    text-transform: uppercase;
  }
  input[type=text]{
    font-size:1.2rem;
    background: #F2F2F2;
    padding: 0.4rem;
    margin-right: 19rem;
    border: none;
    outline: none;
    width: 50%;
  }
  h2{
    margin-right: 30rem;
    text-transform: uppercase;
  }

  textarea{
    font-size:1rem;
    background: #F2F2F2;
    padding: 0.4rem;
    outline: none;
    width: 95%;
    border: none;
    border-radius: 0.25rem;
  }
  button{
    text-transform: uppercase;
    border: none;
    background: #0062BE;
    color: #FFF;
    font-size:1.2rem;
    padding: 0.5rem 3rem;
    border-radius: 0.25rem;
    margin-top:2rem;

    cursor:pointer;

    &:hover{
      background: ${darken(0.1, '#0062BE')};
    }
  }
 
`;

export const CloseModalButton = styled(AiOutlineClose)`
  position: absolute;
  top: 2rem;
  right: 0.1rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 10;
  color: #000;

  cursor: pointer;
`;