import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
function Header(){
    return(

  <Navbar bg="dark" variant="dark">
      <Link to="/">
        <img
          alt=""
          src="https://cdn.iconscout.com/icon/free/png-256/gucci-3-555345.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        TamaGucci
      </Link>
      <Link to="/newpet">
        <img
          alt=""
          src="https://cdn1.iconfinder.com/data/icons/retro-gadget-fill-outline/64/70_tamagotchi-digital-pet-toy-retro-512.png"
          width="30"
          height="30"
          className="d-inline-block align-top newPetIcon"
        />{' '}
      </Link>
    </Navbar>
  );
}

 export default Header;
