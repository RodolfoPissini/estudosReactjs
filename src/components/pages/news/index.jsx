import { useContext, useEffect, useState } from "react";
import Modal from 'react-modal'
import {PepsiContext} from '../../../context/index';
import { PostModal } from "../../modal";

import { Container, 
  ContentPost,
  ContentIcons,
  Heartbeat,
  Like, 
  DisLike,
  ModalContainer} from './styles'

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
      {/* <Modal
      isOpen={isNewPostModalOpen}
      onRequestClose={handleCloseNewPostModal}
      ariaHideApp={false}
    >
      <ModalContainer>
        <h1>titulo do post</h1>
        <input 
          type="text"
          placeholder="Digite um título para o post"
        />
        <h2>Digite o post</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <input type="button" value="Post" />
      </ModalContainer>
    </Modal> */}


      <ContentPost>
        <h1>News</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto, officiis deleniti harum similique voluptatum quam consectetur dolor necessitatibus distinctio quod eveniet at, eius sed exercitationem, cum iure magnam sequi?</p>
        <ContentIcons>
          <p><span><Heartbeat/></span></p>
          <p><span><Like/></span></p>
          <p><span><DisLike/></span></p>
        </ContentIcons>
      </ContentPost>            
    </Container>
  )
}