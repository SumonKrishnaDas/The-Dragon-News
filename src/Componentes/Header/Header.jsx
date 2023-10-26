import React from 'react';
import './Header.css'

import logo from '../../assets/picture/logo.png';
import moment from 'moment/moment';
import { Button ,Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
<div className='text-center' >

<img className='logo' src={logo} alt="" />
           <p><small>Journalism Without  Fear or Favor </small>   </p>
           <p>    {moment().format('MMMM Do YYYY ')}   </p>
            
</div>



<div className='d-flex' >       <Button variant="danger">Danger</Button> <Marquee className='text-danger' speed={50} >
  I can be a React component, multiple React components, or just some text.
</Marquee>
  </div>

 
 
     
 


  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
 


          </Nav>
          <Nav>
            <Nav.Link href="#deets"> Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>







        </Container>
    );
};

export default Header;