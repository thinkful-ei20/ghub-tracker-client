import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="/">Login</Link>
        </ul>
      </div>
    )
  }
}

