import App from '../src/App';
import PostGenerator from '../src/Components/PostGenerator';

function Posts() {
  return (
    <div>
      <App>
        <h1>Click the button below to generate a post</h1>
        <PostGenerator/>
      </App>
    </div>
  )
}

export default Posts;