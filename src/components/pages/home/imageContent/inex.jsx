
import facebook from '../../../../assets/images/facebook.png';
import instagram from '../../../../assets/images/instagram.png';
import twitter from '../../../../assets/images/twitter.png';
import {PepsiContext} from '../../../../context/index';
import {useContext} from 'react';

import {Container} from'./index';

export function ImageContent(){
  const {pepsiImage} = useContext(PepsiContext)
  return(
    <Container>
      <img src={pepsiImage} alt="pepsi" />
      <div>
        <ul>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
        </ul>
      </div>
    </Container>
  );
}