import React from 'react';
import'./Subscribe.css'
function Subscribe(props) {
    return (
        <div className='Sub'> 
                <div className='subWrapper'>
            <div className='subText'>
                <p>Subscribe Our Newsletter</p>
            </div>
            <div className="subInputWrapper"style={{gap:"20px"}} >
                <input placeholder='Name : ' className='nameInput'/>
                <input placeholder='Email : ' className='emailInput'/>
                <button className='subButton'><p style={{fontWeight:"20px"}}>Send</p></button>
            </div>
        </div>
        </div>
        
    );
}

export default Subscribe;