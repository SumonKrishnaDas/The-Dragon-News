import React from 'react';
import { Card,CardGroup,Row,Col } from 'react-bootstrap';
import frist from'../../../assets/picture/1.png'
import second from'../../../assets/picture/2.png'
import third from'../../../assets/picture/3.png'
const Editorsinsight = () => {
    return (
        <div>
            
<Row xs={1} md={2} lg={3}>


<Col>
          <Card>
            <Card.Img variant="top" src={frist} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

<Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

<Col >
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


</Row>

        


        </div>
    );
};

export default Editorsinsight;