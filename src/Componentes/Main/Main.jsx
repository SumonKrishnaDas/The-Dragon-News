import React from 'react';
import Header from '../Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Container,Row,Col} from 'react-bootstrap';
import Left from '../Pages/LeftSide/Left';
import RightSide from '../Pages/RightSide/RightSide';
import MainSide from '../Pages/MainSide/MainSide';
import'./main.css'

const Main = () => {
    return (
        <div>

<Header>  </Header>

<Container className='maindata'>
      <Row>
        <Col lg={3} > <Left>  </Left>   </Col>
       
   <Col lg={6}><MainSide> </MainSide></Col>
        <Col lg={3}> <RightSide> </RightSide></Col>
      </Row>
  
    </Container>















<Footer> </Footer>

        </div>
    );
};

export default Main;