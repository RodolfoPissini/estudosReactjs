import styled from 'styled-components';
import {darken} from 'polished';
import { MdDelete } from "react-icons/md";
import { AiFillLike, AiFillDislike, AiFillHeart} from "react-icons/ai";

export const Container = styled.div`
  /* position: relative; */
  background: var(--background-Content);
  padding: 5rem;
  border-radius: 0.25rem;
  display:flex;
  flex-direction: column;
  align-items: flex-end;
  
  filter: drop-shadow(0.25rem 0.90rem 1rem rgba(0, 0, 0, 0.4));

  button{
    width: 15rem;
    color: var(--text);
    background: #0062BE;
    font-size:1.2rem;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    padding: 0.25rem 4rem;
    left: 0;
    margin-bottom: 2rem;
    border-radius: 0.25rem;

    &:hover{
      background: ${darken(0.1, '#0062BE')};
    }
  }
`;

export const ContentPost = styled.div`
  width: 100%;
  background: #F0EFEE;
  padding: 2rem;
  border-radius: 0.25rem;
  margin-bottom:4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    width: 90%;
  }

`;


export const ContentIcons = styled.div`
  margin-top:2rem;
  display: flex;
`;

export const Heartbeat = styled(AiFillHeart)`
  font-size:2rem;
  color: #E60C2C;
  margin-right:1rem;

  cursor:pointer;

  transition: color 0.5s;

  &:hover{
      color: ${darken(0.1, '#E60C2C')};
  }
`;

export const Like = styled(AiFillLike)`
  font-size:2rem;
  color: #0062BE;
  margin-right: 1rem;

  cursor:pointer;

  transition: color 0.5s;

  &:hover{
      color: ${darken(0.1, '#0062BE')};
  }
`;

export const DisLike = styled(AiFillDislike)`
  font-size:2rem;
  color: #0062BE;
  margin-right: 1rem;

  cursor:pointer;

  transition: color 0.5s;

  &:hover{
      color: ${darken(0.1, '#0062BE')};
  }
`;

export const DeleteButton = styled(MdDelete)`
  font-size:4rem;
  color: #E60C2C;
  margin-right:1rem;

  cursor:pointer;

  transition: color 0.5s;

&:hover{
      color: ${darken(0.1, '#E60C2C')};
  }
`;