import {createContext, useEffect, useState} from'react';
import { api } from '../services/api';

export const PostContext = createContext([]);

export function PostProvider(props){
  const [newPost, setNewPost] = useState([]);
  const [posties, setPosties] = useState('');
  const [postBodie, setPostBodie] = useState('');

  useEffect(()=>{
    api.get('news/api/posts')
      .then(response => setNewPost(response.data.posts))
  },[])

  async function createPosts(Posts){
    const response = await api.post('news/api/posts', Posts);
    const {post} = response.data;

   return setNewPost([
      ...newPost,
      post,
    ])
  }

  async function deletePosts(posts){
    console.log(posts)
    const response = await api.delete('news/api/posts', posts);
    const {post} = response.data;
    return setNewPost([
      ...newPost,
      post
    ])
  }

  return(
    <PostContext.Provider value={{newPost, posties, setPosties, postBodie, setPostBodie, createPosts, deletePosts}}>
      {props.children}
    </PostContext.Provider>
  )

}