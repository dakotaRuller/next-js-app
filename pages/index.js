import App from '../src/App';
import fetch from 'isomorphic-fetch';

const Index = props => {
  return (
    <div>
      <App>
        <h1>Next.js App</h1>
        {console.log(props.data)}
      </App>
    </div>
  )
};

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/36');
  const data = await res.json();

  console.log(data);
  return{
    data: data
  }
};

export default Index;