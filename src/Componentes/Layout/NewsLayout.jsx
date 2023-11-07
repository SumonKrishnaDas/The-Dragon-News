import React from 'react';
import Header from '../Header/Header';

import Footer from '../Pages/Footer/Footer';
import { Outlet } from 'react-router-dom';
import RightSide from '../Pages/RightSide/RightSide';
import { Container ,Row,Col} from 'react-bootstrap';

const NewsLayout = () => {
    return (
        <div>

        <Header>  </Header>


            <Container>

<Row>

<Col lg={9} >

<Outlet> </Outlet>

</Col>

<Col lg={3}>
<RightSide> </RightSide>

</Col>

</Row>


            </Container>
        
        <Footer> </Footer> 
        
                </div>
    );
};

export default NewsLayout;