import { useContext, useEffect, useState } from "react";
import Modal from 'react-modal'
import {PepsiContext} from '../../../context/index';
import { api } from "../../../services/api";
import { PostModal } from "../../modal";

import { Container, 
  ContentPost,
  ContentIcons,
  ContentContainer,
  Heartbeat,
  Like, 
  DisLike,
  DeleteButton} from './styles'

  Modal.setAppElement('#root')

export function News(){
  const {setPepsiColor} = useContext(PepsiContext);
  const [isNewPostModalOpen, setIsNewPostModal] = useState(false);

  function handleOpenNewPostModal(){
    setIsNewPostModal(prev => !prev)
  }

  useEffect(()=>{
    setPepsiColor('#0062BE')
  },[])

  useEffect(()=>{
    api.get('news/api/posts')
      .then(response => console.log(response.data))
  },[])

  return(
    <Container>
      <button
        onClick={handleOpenNewPostModal}
      >
        new post
      </button>
      <PostModal 
        isNewPostModalOpen={isNewPostModalOpen}
        setIsNewPostModal={setIsNewPostModal}
      />
      <ContentPost>
      <ContentContainer>  
        <div>
          <h1>News</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto, officiis deleniti harum similique voluptatum quam consectetur dolor necessitatibus distinctio quod eveniet at, eius sed exercitationem, cum iure magnam sequi?</p>
        <ContentIcons>
          <p><span><Heartbeat/></span></p>
          <p><span><Like/></span></p>
          <p><span><DisLike/></span></p>
        </ContentIcons>
        </div>    
        <DeleteButton/> 
      </ContentContainer>         
      </ContentPost>  
    </Container>
  )
}