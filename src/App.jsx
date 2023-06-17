import MainHeader from './components/MainHeader';
import PostsList from './components/postsList';
import { useState } from 'react';

function App() {
  const [isModalVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <header>
        <MainHeader onCreatePost={showModalHandler} />
      </header>
      <main>
        <PostsList isPosting={isModalVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
