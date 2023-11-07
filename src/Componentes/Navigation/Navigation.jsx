import React,{useContext} from 'react';
import { Container } from 'react-bootstrap';
import { Navbar,Nav,} from 'react-bootstrap';
import profile from'../../assets/picture/user.png'
import { Link } from 'react-router-dom';
import  { Authcontext} from '../../Provider/AuthProvider'
import {Button}  from 'react-bootstrap';




const Navigation = () => {


    
  const {user,logout}  = useContext(Authcontext); 
console.log(user);



 const  handleLogout=()=>
  {

    logout()
    .then()
    .catch(error=>{

      console.log(error.messeage)
    })
  }

    return (
        <Container>

  
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='head'>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
  <Link  to="/">Home </Link>       
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
           { user &&  
              <Link>
              {user.displayname}<img className='profile' src={profile} alt="" />
              
              </Link>
                 
              
              
              


              }

        { user ?     <Button  onClick={handleLogout}   className='secondary1'>Logout</Button>:  
      <Link to={'/login'}>         <Button className='secondary1'>Login</Button>  </Link> }


     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



            
        </Container>
    );
};

export default Navigation;