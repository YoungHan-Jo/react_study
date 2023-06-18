import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false); // loading spinnerを表示するためのstate

  // // fetchをそのまま使うと中にあるsetPostsで無限ループになるので、useEffectを使う
  // useEffect(() => {
  //   //useEffect hookは async/awaitを使えない -> 中にasync functionを定義する
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch('http://localhost:8080/posts');
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []); //　２nd argにいつ実行するかを指定する。空の配列を指定すると、最初の１回だけ実行される

  // function addPostHandler(postData) {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  //   setPosts(existingPosts =>
  //     // 最新のstateのsnapshotをexistingPostsでもらう
  //     [postData, ...existingPosts],
  //   );
  // }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
            // uniqueなkeyを指定することで、Reactが効率的に再描画する
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts ...</p>
        </div>
      )} */}
    </>
  );
}

export default PostsList;
