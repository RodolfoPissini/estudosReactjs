import {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';

import { Container, 
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton
} from "./style";

export function PostModal({isNewPostModalOpen,setIsNewPostModal}){
  const modalRef = useRef();

  const animation = useSpring({
    config:{
      duration:250
    },
    opacity: isNewPostModalOpen ? 1 : 0,
    transform: isNewPostModalOpen ? 'transleteY(0%)' : 'transleteY(-50%)'

  })

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

console.log(animation)
  return(
    <Container>
    {isNewPostModalOpen ?(
      <Background 
        ref={modalRef}
        onClick={closeModal}
      >
        {/* <animated.div style={animation}> */}
          <ModalWrapper 
            isNewPostModalOpen={isNewPostModalOpen}
          >
            <ModalContent>
              <form action="">
                <h1>Difite um título pro post</h1>
                <input type="text" />
                <h2>Digite o POst</h2>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="button" value="enviar" />
              </form>
            <CloseModalButton 
              aria-label="Close modal"
              onClick={()=> setIsNewPostModal(prev => !prev)}
            />
            </ModalContent>
          </ModalWrapper>
        {/* </animated.div> */}
      </Background>
    )  : null  
    }
    
    </Container>
  )
}