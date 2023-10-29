import React from 'react';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa'
import Qzone from '../../../Q-zone/Qzone';
import './Rightside.css'


import {Button
    , ListGroup } from 'react-bootstrap';

const RightSide = () => {
    return (
        <div>
            
<h4>Login  With</h4>

<Button className='mb-2' variant="outline-primary"><FaGoogle/> Login With Google</Button>
      <Button variant="outline-secondary"><FaGithub/> Login with Github</Button>

<div className='find-us'>


<h4> Find us on</h4>

<ListGroup>
      <ListGroup.Item disabled><FaFacebook color=' #1877F2' ></FaFacebook>Facebook   </ListGroup.Item>
      <ListGroup.Item><FaTwitter color='#1DA1F2'></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram  color='#E4405F'  > </FaInstagram>Instagram </ListGroup.Item>
    
    </ListGroup>
 
</div>


<Qzone> </Qzone>


<div className='background'>

<h4 className='header-4'>Create an Amazing Newspaper</h4>
<p className='para-4'> Discover thousands of options, easy to customize layouts, one-click to import demo and much more. </p>
<button className='button-4' >   Learn More </button>
</div>


        </div>
    );
};

export default RightSide;