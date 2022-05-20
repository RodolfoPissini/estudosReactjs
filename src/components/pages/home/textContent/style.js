import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;

  h1{
    color: var(--text);
    font-size:4rem;
    text-transform:uppercase;
    font-weight:bold;
  }

  span{
    color: var(--text);
    font-size:8rem;
    text-transform:uppercase;
    line-height: 5rem;
    letter-spacing:0.01rem;

    font-weight:bold;
  }

  p{
    max-width:700px;
    color: var(--text);
    font-size:1.6rem;
    line-height: 2rem;
  }

  .btn-view{
    padding: 0.5rem 4rem;
    margin-top: 2rem;
    border-radius:4rem;
    border: none;

    font-size:1rem;
    text-transform: uppercase;

    transition: filter 0.8s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;