import React from 'react';
import { Link } from 'react-router-dom';

import TopNav from '../top-nav/top-nav';

export default function Header(props) {
  return (
    <React.Fragment>
      <header role="banner">
        <TopNav />
      </header>
    </React.Fragment>
  );
}
