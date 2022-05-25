import { useContext, useEffect, useState } from "react";
import Modal from 'react-modal'
import { PostContext } from "../../../context/apiContext";
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

  const {newPost, deletePosts} = useContext(PostContext);

  function handleOpenNewPostModal(){
    setIsNewPostModal(prev => !prev)
  }

  async function handleDeletePost(id){
    // console.log(id)

    await deletePosts({
      id
    })
    // return api.delete(`news/api/posts${id}`)
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
      {newPost.map((posts) => (
        
        <ContentPost key={posts.id}>
          <ContentContainer >  
            <div>
              <h1>{posts.posties}</h1>
              <p>{posts.postBodie}</p>
              <ContentIcons>
                <span><Heartbeat/></span>
                <span><Like/></span>
                <span><DisLike/></span>
              </ContentIcons>
            </div>    
          </ContentContainer>         
            <DeleteButton onClick={()=>handleDeletePost(posts.id)}/> 
        </ContentPost>  
      ))}
    </Container>
  )
}