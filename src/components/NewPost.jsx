import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState(''); // useStateの0,1番目の要素を定義
  const [enteredAuthor, setEnteredAuthor] = useState(''); // useStateの0,1番目の要素を定義

  function bodyChangedHandler(event) {
    setEnteredBody(event.target.value); //このcomponent関数が再実行される
  }

  function authorChangedHandler(event) {
    setEnteredAuthor(event.target.value); //このcomponent関数が再実行される
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangedHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangedHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
