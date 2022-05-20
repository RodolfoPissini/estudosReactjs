import { ImageContent } from "./imageContent/inex";
import { TextContent } from "./textContent";
import pepsiOriginal from '../../../assets/images/pepsi001.png'

import {Container} from './style'
import { Footer } from "./footer";
import { useContext, useEffect } from "react";

import {PepsiContext} from '../../../context/index'

export function Home(){
  const {setPepsiColor} = useContext(PepsiContext);
  const {setPepsiImage} = useContext(PepsiContext);

  useEffect(()=>{
    setPepsiColor('#0062BE')
    setPepsiImage(pepsiOriginal);

  },[]);
  return(
      <Container>
        <TextContent/>
        <ImageContent/>
        <Footer/>
      </Container>
  )
}