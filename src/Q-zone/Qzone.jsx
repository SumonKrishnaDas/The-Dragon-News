import React from 'react';
import Swiming from'../assets/picture/qZone1.png'
import classroom from'../assets/picture/2.png'
import playground from'../assets/picture/qZone3.png'



import './Q-zone.css'

const Qzone = () => {
    return (
        <div className='bg'>
            <h4 className='text-center'>Q-zone </h4>
<img  src={Swiming} alt="" />
<img  src={classroom} alt="" />
<img  src={playground} alt=""/>

        </div>
    );
};

export default Qzone;