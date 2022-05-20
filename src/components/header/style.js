import styled from "styled-components";

import {Link} from 'react-router-dom';

export const Container = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index:1;
  padding: 2rem 0;

  img{
    width:8rem;
  }

  ul{
    display: flex;
  }

  li{
    list-style: none;
    font-size:1.5rem;
    color: var(--text);
    margin-left: 4rem;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: var(--text);
`;