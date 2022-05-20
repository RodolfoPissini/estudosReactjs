import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li{
    display: flex;
    justify-content: center;
    margin-top:2rem;
    list-style-type: none;


    filter: invert(1);
  }
`;
