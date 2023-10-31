import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Pages/Home/newsCard';

const Catagory = () => {

    const{id}=useParams();

    const categoryNews= useLoaderData();
    console.log(categoryNews)
    return (
        <div>
            <h3>This category news: {categoryNews.length}</h3>

            {

                categoryNews.map(news => <NewsCard key= {news._id} news={news}> </NewsCard>)
            }
            
        </div>
    );
};

export default Catagory;