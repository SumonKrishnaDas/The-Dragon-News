import React,{useContext} from 'react';
import './Header.css'

import logo from '../../assets/picture/logo.png';
import moment from 'moment/moment';
import { Button ,Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Navigation from '../Navigation/Navigation';




const Header = () => {


 



    return (
        <Container>
<div className='text-center' >

<img className='logo' src={logo} alt="" />
           <p><small>Journalism Without  Fear or Favor </small>   </p>
           <p>{moment().format('MMMM Do YYYY ')}   </p>
            
</div>



<div className='d-flex' ><Button variant="danger">Danger</Button> <Marquee className='text-danger' speed={50} >
  I can be a React component, multiple React components, or just some text.
</Marquee>
  </div>

<Navigation> </Navigation>





        </Container>
    );
};

export default Header;