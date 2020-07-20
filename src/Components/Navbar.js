import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

function NavBar() {

  return (

    <Nav defaultActiveKey="/home" as="ul" style={{
      fontSize: "20px", color: "navy"
    }}>
      <Nav.Item as="li">
        <Nav.Link to="/"><Link to="/"> Home </Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1"><Link to="/about"> About </Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2"><Link to="/product"> Product </Link></Nav.Link>
      </Nav.Item>
    </Nav >

    //   <div>
    //     <div>
    //       <Link to="/"> Home </Link>
    //       <Link to="/about"> About </Link>
    //     </div>

    // </div>
  );
}

export default NavBar;
