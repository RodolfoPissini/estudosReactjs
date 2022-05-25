import {useRef, useEffect, useCallback, useState, useContext} from 'react';
import { PostContext } from '../../context/apiContext';

import { Container, 
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton
} from "./style";

export function PostModal({isNewPostModalOpen,setIsNewPostModal}){
  const modalRef = useRef();
  const {createPosts, posties,postBodie} = useContext(PostContext)
  const {setPosties, setPostBodie} = useContext(PostContext)


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

  async function handleCreateNewPost(e){
    e.preventDefault();

    await createPosts({
      posties,
      postBodie
    })

    setPosties('')
    setPostBodie('')

    setIsNewPostModal(false);    
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
                  value={posties}
                  onChange={event => setPosties(event.target.value)}
                />
                <h2>Digite o Post</h2>
                <textarea 
                  cols="30" 
                  rows="10"
                  value={postBodie}
                  onChange={event => setPostBodie(event.target.value)}
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