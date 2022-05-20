import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #141414;

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
  }
  h1{
    text-transform: uppercase;
  }
  input[type=text]{
    width: 50%;
  }
  h2{
    text-transform: uppercase;
  }

  textarea{
    width: 50%;
  }
  input[type=button]{
    margin-top:2rem;
  }
 
`;

export const CloseModalButton = styled(AiOutlineClose)`
  position: absolute;
  top: 0.2rem;
  right: 0.1rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 10;
  color: #000;

  cursor: pointer;
`;