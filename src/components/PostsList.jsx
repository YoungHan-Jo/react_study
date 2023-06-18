import { useState, useEffect } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // loading spinnerを表示するためのstate

  // fetchをそのまま使うと中にあるsetPostsで無限ループになるので、useEffectを使う
  useEffect(() => {
    //useEffect hookは async/awaitを使えない -> 中にasync functionを定義する
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []); //　２nd argにいつ実行するかを指定する。空の配列を指定すると、最初の１回だけ実行される

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    });
    setPosts(existingPosts =>
      // 最新のstateのsnapshotをexistingPostsでもらう
      [postData, ...existingPosts],
    );
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post => (
            <Post key={post.body} author={post.author} body={post.body} />
            // uniqueなkeyを指定することで、Reactが効率的に再描画する
            // 普通はidを使うが、今回はbodyを使う
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts ...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
