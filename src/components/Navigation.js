import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {

    render() {
        return (
          <nav className='nav'>
            <ul>
              <li><Link to='/'>Popular</Link></li>
              <li><Link to='/favorites'>Favorites</Link></li>
            </ul>
          </nav>
        );
    }

}

export default Navigation;
