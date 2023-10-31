import React from 'react';
import Header from '../Header/Header';
import { Container,Row,Col } from 'react-dom';
import Footer from '../Pages/Footer/Footer';

const NewsLayout = () => {
    return (
        <div>

        <Header>  </Header>
        
        <Container className='maindata'>
              <Row>
        
               
           <Col lg={9}> <Outlet> </Outlet>   </Col>
        
                <Col lg={3}> <RightSide> </RightSide></Col>
              </Row>
          
            </Container>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <Footer> </Footer>
        
                </div>
    );
};

export default NewsLayout;