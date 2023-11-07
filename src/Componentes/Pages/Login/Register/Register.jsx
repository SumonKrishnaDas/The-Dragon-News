import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../../Provider/AuthProvider';
import { updatePassword } from 'firebase/auth';

const Register = () => {


    const{createUser,update}= useContext(Authcontext);




const handleRegister=event=>{
event.preventDefault()

const form = event.target;
const email = form.email.value;
const password = form.password.value;
const photo = form.photo.value;
const name= form.name.value

console.log(form,email,password,name);

createUser(email,password)
.then(result=> {
const createdUser =  result.user;

console.log(createdUser);

})

.catch(error=>{


    console.log(error.messeage);
}
    )


    update(name,photo)
    .then( result=>{
    
     const  updatedata = result.user
      console.log(updatedata)
    })
    .catch(error=>{
      console.log(error.message)
    })
    




}



    return (
        
    


        <Container  className='mx-auto w-25'>

            <h3>Please Register </h3>

<Form onSubmit={handleRegister}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  name='email' type="email" placeholder="Enter email" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control  name='name' type="text" placeholder="Enter Name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>

        <Form.Control  name='photo' type="text" placeholder="Enter Photo Url " />
       
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
      <br />
      <Form.Text className="text-danger">
          <Link  to="/login"> You have allredy  account? Please Login   </Link>
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
      <Form.Text className="text-sucses">
       
        </Form.Text>


    </Form>
            
        </Container>
    );
};

export default Register;