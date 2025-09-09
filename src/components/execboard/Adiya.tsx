
import React from 'react';
import adiya from '../assets/adiya.jpg';

function AdiyaM() {
    return(
        <>
        <div className='card2'>
            <img src={adiya} alt="VP Membership Programming"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',
                }}
            />
            <p className="phil-info bold">Vice President<br></br> Membership Programming</p>
            <p className="phil-info">Adiya Marcus</p>
        </div>
         
        </>
       
    )
    
}

export default AdiyaM;