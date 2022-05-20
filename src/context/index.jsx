import {createContext, useState} from'react';
import pepsiOriginal from '../assets/images/pepsi001.png';

export const PepsiContext = createContext();


export function PepsiProvider(props){
  const [pepsiImage, setPepsiImage] = useState(pepsiOriginal);
  const [pepsiColor, setPepsiColor] = useState('#0062BE');
  return(
    <PepsiContext.Provider value={{pepsiImage, setPepsiImage, pepsiColor, setPepsiColor}}>
      {props.children}
    </PepsiContext.Provider>

  )
}