import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
let newPostElement = React.createRef();
let addPost = () => {
  let text = newPostElement.current.value;
  alert(text);
};

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;