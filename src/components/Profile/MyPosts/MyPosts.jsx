import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
  {id: '1', message: 'Hi,how are you?', likesCount: 12},
  {id: '2', message: "It's my first post", likesCount: 11},
  {id: '3', message: "Ok", likesCount: 99}
];



const MyPosts = (props) => {

  let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postElements }
      </div>
    </div>
  )
}

export default MyPosts;