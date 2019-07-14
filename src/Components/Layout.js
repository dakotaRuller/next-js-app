import React, {Component} from 'react';
import Head from 'next/head';
import Navbar from './Navbar';


class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Head>
          <title>Next.js App</title>
        </Head>
        <div className={"layout-container"}>
          <Navbar/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;