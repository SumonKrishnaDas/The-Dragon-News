import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import'./Left.css'
import News from '../New/News';

const Left = () => {

const [catagories,setCatagories] =useState([]);
useEffect(()=>{


fetch('http://localhost:5000/catagories')
.then(res=>res.json())
.then(data=>setCatagories(data))
.catch(error=>console.log(error))


},[])


    return (
        <div>

<h4>All catagories  </h4>
<div className='nationalNews'><h4  className='News'> National News </h4> </div>

{

  catagories.map( catagory => <p key={catagory.id}><Link to={`/category/${catagory.id}`} className='text-decoration-none  text-black' > {catagory.name} </Link> </p>)
}



            <News> </News>
        </div>
    );
};

export default Left;