import React, { useContext } from 'react';
import { Button ,Container,Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Provider/AuthProvider';

const Login = () => {

const navigate = useNavigate();

const {loginUser} = useContext(Authcontext)



    const handleLogin  = event=>{

    
event.preventDefault();

const form = event.target;
const email =form.email.value;
const password = form.password.value;
console.log(form,email,password)

loginUser(email,password)
.then(result=>{
    const logeduser= result.user;
    console.log(logeduser)
    navigate('/catagory/0')
})
.catch(error=>{
    console.log(error.messege)
})

    }


    return (




        <Container  className='mx-auto w-25'>
            <h3>Please Login  </h3>

<Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  name='email' type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  name='password' required type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"   required  label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br/>
      <Form.Text className="text-danger">
          <Link  to="/register"> Dont have an account? Please Register   </Link>
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
      <Form.Text className="text-sucses">
       
        </Form.Text>


    </Form>
            
        </Container>







    );
};

export default Login;