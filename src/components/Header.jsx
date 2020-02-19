import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(

  <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://cdn.iconscout.com/icon/free/png-256/gucci-3-555345.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        TamaGucci
      </Navbar.Brand>
    </Navbar>
  );
}

 export default Header;
