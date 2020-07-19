import React from 'react';
import { Link } from 'react-router-dom';

function Button() {

  return (
    <div>
          <Link to="/product1/Men"> <button> Men </button> </Link>
          <Link to="/product1/Women"> <button> Women </button> </Link>
          <Link to="/product1/Children"> <button> Children </button> </Link>
	</div>
  );
}

export default Button;