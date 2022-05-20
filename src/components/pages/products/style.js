import styled from "styled-components";
import {darken} from 'polished';
import { FiChevronUp } from "react-icons/fi";

export const Container = styled.div`
  position: relative;
  background:#fff;
  padding: 0 8rem;
  border-radius: 0.25rem;

`;

export const UpArrow = styled.div`
  background: #0062BE;
  /* position: absolute; */
  padding: 0.5rem 0.8rem;
  border-radius: 50%;
  right:4.5%;
  bottom: 4%;
  position: fixed;
  border: solid 1px #fff;
  box-shadow: 0.1rem 0.3rem 11px #B3B3B3; 
  visibility: ${(props) => props.visible === true ? 'hidden' : 'visible'};

  cursor: pointer;

  @media (max-width: 1700px) {
    right: 8%;
  }

  
`;

export const Up = styled(FiChevronUp)`
  color: #fff;
  font-size:2rem;
`;

 
export const TitleDescription = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  transition:0.5s;

  h1{
    font-size:3rem;
  }

  .links{
    margin-right: 2rem;
    font-weight: bold;
    font-size:2rem;


    cursor:pointer;

    transition:0.5s;

    &:hover{
      color:#0062BE;
    }

  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size:4rem;
  text-transform:uppercase;
`;

export const HorizontalRow = styled.hr``

export const ProductLeftDescription = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  margin-bottom: 2rem;
  margin-right: 50%;

  img{
    margin-right: 2rem;
    height: 35rem;
    width: 35rem;
  }

  h1{
    font-size:3rem;
    text-transform:uppercase;
    margin-bottom: 4rem;
  }

  p{
      font-size:1.5rem;
      line-height:1.6rem;
      margin-bottom: 8rem;
  }

  button{
    font-size:1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background: #0062BE;
    color: #fff;
    padding: 0.25rem 5rem;
    border: none;
    border-radius: 0.25rem;

    transition: all 0.5s;

    &:hover{
      background-color: ${darken(0.1, '#0062BE')};
    }
  }
`;

export const Description = styled.div``;

export const ProductRightDescription = styled.div`
  display: flex;
  flex-direction:row-reverse;
  justify-content:space-between;
  margin-bottom: 2rem;
  margin-left: 50%;

  img{
    margin-right: 2rem;
    height: 35rem;
  }

  h1{
    font-size:3rem;
    text-transform:uppercase;
    margin-bottom: 4rem;
  }

  p{
      font-size:1.5rem;
      line-height:1.6rem;
      margin-bottom: 8rem;
  }

  button{
    font-size:1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background: #0062BE;
    color: #fff;
    padding: 0.25rem 5rem;
    border: none;
    border-radius: 0.25rem;

    transition: all 0.5s;

    &:hover{
      background-color: ${darken(0.1, '#0062BE')};
    }
  }
`;
