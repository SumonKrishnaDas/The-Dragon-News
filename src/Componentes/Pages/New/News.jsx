import React from 'react';
import child from '../../../assets/picture/1.png';
import boys from '../../../assets/picture/2.png';
import cup from'../../../assets/picture/3.png'
import { HiChatAlt2 } from "react-icons/hi";


const News = () => {
    return (
        <div>

<div><img src={child} alt="" />
<p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
<div className='d-flex justify-content-between'>
    <p>Sports </p>
    <HiChatAlt2/>
<p> <span> jan,4,2022</span></p>
</div>

</div>


<div> <img src={boys} alt="" /> 
<p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
<div className='d-flex justify-content-between'>
    <p>Sports </p>
    <HiChatAlt2/>
<p> <span> jan,4,2022</span></p>
</div>


 </div>



<div>  <img src={cup} alt="" />  
<p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
<div className='d-flex justify-content-between'>
    <p>Sports </p>
    <HiChatAlt2/>
<p> <span> jan,4,2022</span></p>
</div>


</div>

            
        </div>
    );
};

export default News;