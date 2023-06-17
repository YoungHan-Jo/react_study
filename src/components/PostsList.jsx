import { useState } from 'react'; // useXXXは react hook

import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState(''); // useStateの0,1番目の要素を定義
  const [enteredAuthor, setEnteredAuthor] = useState(''); // useStateの0,1番目の要素を定義

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangedHandler(event) {
    setEnteredBody(event.target.value); //このcomponent関数が再実行される
  }

  function authorChangedHandler(event) {
    setEnteredAuthor(event.target.value); //このcomponent関数が再実行される
  }

  let modalContent;

  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost onBodyChange={bodyChangedHandler} onAuthorChange={authorChangedHandler} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Lee" body="React.js is awesome!" />
        <Post author="Park" body="React.js is awesome!" />
      </ul>
    </>
  );
}

export default PostsList;
