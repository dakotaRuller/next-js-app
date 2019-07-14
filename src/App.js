import React from 'react';
import './CSS/global/main.css';
import Layout from './Components/Layout';

const App = (props) => (
  <div>
    <Layout>
      {props.children}
    </Layout>
  </div>
);

export default App;