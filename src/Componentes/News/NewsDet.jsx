import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Editorsinsight from '../Pages/Editorsinsight/Editorsinsight';

const NewsDet = () => {

    const news = useLoaderData();

    console.log('from sumon hello',news)

const{_id,title,details,image_url, category_id} = news;


    return (
        <div>
            

            <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {details}
        
        </Card.Text>
        <Link to={`/category/${category_id}`}>      <Button variant="danger"> All News in this Category</Button>               </Link>
      </Card.Body>
    </Card>
<Editorsinsight> </Editorsinsight>

        </div>
    );
};

export default NewsDet;