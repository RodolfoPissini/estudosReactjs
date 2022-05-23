import {useRef, useEffect, useCallback, useState} from 'react';
import { api } from '../../services/api';

import { Container, 
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton
} from "./style";

export function PostModal({isNewPostModalOpen,setIsNewPostModal}){
  const modalRef = useRef();
  const [post, setPost] = useState('');
  const [bodyPost, setBodyPost] = useState('');


  function closeModal(e){
    if(modalRef.current === e.target){
      setIsNewPostModal(false);
    }
  }

  const keyPress = useCallback((e) =>{
    if(e.key === 'Escape' && isNewPostModalOpen){
      setIsNewPostModal(false);
    }
  },[isNewPostModalOpen, setIsNewPostModal])

  useEffect(()=>{
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress)
  },[keyPress])

  function handleCreateNewPost(e){
    e.preventDefault();

    const data = {
      post,
      bodyPost
    };

    api.post('/')
  }

  return(
    <Container>
    {isNewPostModalOpen ?(
      <Background 
        ref={modalRef}
        onClick={closeModal}
      >
          <ModalWrapper 
            isNewPostModalOpen={isNewPostModalOpen}
          >
            <ModalContent onSubmit={handleCreateNewPost}>
              <form action="">
                <h1>Digite um título pro post</h1>
                <input 
                  type="text"
                  value={post}
                  onChange={event => setPost(event.target.value)}
                />
                <h2>Digite o Post</h2>
                <textarea 
                  cols="30" 
                  rows="10"
                  value={bodyPost}
                  onChange={event => setBodyPost(event.target.value)}
                />
                <button type="submit">Send</button>
              </form>
            <CloseModalButton 
              aria-label="Close modal"
              onClick={()=> setIsNewPostModal(prev => !prev)}
            />
            </ModalContent>
          </ModalWrapper>
      </Background>
    )  : null  
    }    
    </Container>
  )
}