import { useContext, useEffect } from "react";
import {PepsiContext} from '../../../context/index';

export function NewsLetter(){
  const {setPepsiColor} = useContext(PepsiContext);

  useEffect(()=>{
    setPepsiColor('#0062BE')
  },[])
  
  return(
    <div>
      <h1>NewsLetter</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto, officiis deleniti harum similique voluptatum quam consectetur dolor necessitatibus distinctio quod eveniet at, eius sed exercitationem, cum iure magnam sequi?</p>
    </div>
  )
}