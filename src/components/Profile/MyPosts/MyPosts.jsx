import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const MyPosts = (props) => {

  let newPostElement = React.useRef();

  let onAddPost = () => {
    props.addPost();
  };
  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <div className={s.postsTitle}>My posts</div>
      <div>
        <div>
          <TextField
            onChange={onPostChange}
            inputRef={newPostElement}
            value={props.newPostText}
            label={'Type here'}
            margin="normal"
          />
        </div>
        <div>
          <Button onClick={onAddPost} variant='contained' size='small'>Add post</Button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;