import logoImage from '../../assets/images/logo.png';
import {Container, Links} from'./style';
import { useRef } from 'react';

export function Header(){
  return(
    <Container >
      <Links to="/">
        <img src={logoImage} alt="logo" />
      </Links>
      <div>
        <ul>
          <li><Links to="/">Home</Links></li>
          <li><Links to='/products'>Products</Links></li>
          <li><Links to="/news">News</Links></li>
          <li><Links to="/newsLetter">NewsLetter</Links></li>
          <li><Links to="/contact">Contact</Links>
          </li>
        </ul>
      </div>
    </Container>
  )
}