import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/roster'>Roster</Link></li>
          <li><Link to='/schedule'>Schedule</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
