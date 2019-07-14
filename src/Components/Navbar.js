import React, {Component} from 'react';
import Link from 'next/link';
import '../CSS/components/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className={"navbar"}>
        <ul className={"navbar-list"}>
          <li className={"navbar-list-item"}><Link href='/'><a>Home</a></Link></li>
          <li className={"navbar-list-item"}><Link href='/about'><a>About</a></Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;