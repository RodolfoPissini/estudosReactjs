import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%;

  img{
    width: 4rem;
    margin-right: 2rem;

    cursor: pointer;

    transition: margin-bottom 0.5s;

    &:hover{
      margin-bottom: 3rem;
    }
  }
`;