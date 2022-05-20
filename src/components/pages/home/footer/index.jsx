import pepsiOriginal from '../../../../assets/images/pepsi001.png';
import pepsiDiet from '../../../../assets/images/pepsi002.png';
import pepsiBlack from '../../../../assets/images/pepsi003.png';
import {Container} from './style'
import {PepsiContext} from '../../../../context/index'
import { useContext } from 'react';

export function Footer(){
  const {setPepsiImage} = useContext(PepsiContext);
  const {setPepsiColor} = useContext(PepsiContext);
  return(
    <Container>
      <img src={pepsiOriginal} alt="pepsiOriginal" 
        onClick={()=>{
          setPepsiImage(pepsiOriginal);
          setPepsiColor('#0062BE');

        }}
      />
      <img src={pepsiDiet} alt="pepsiDiet" 
        onClick={()=>{
          setPepsiImage(pepsiDiet);
          setPepsiColor('#E60C2C');
        }}
      />
      <img src={pepsiBlack} alt="pepsiBlack" 
        onClick={()=>{
          setPepsiImage(pepsiBlack);
          setPepsiColor('#1E1E1E');
        }}
      />
    </Container>
  )
}