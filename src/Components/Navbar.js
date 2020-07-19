import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
      </div>
   
	</div>
  );
}

export default NavBar;
