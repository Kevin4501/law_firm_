import React from 'react';
import NavBar from './NavBar';
import './Cover.css'
import Email from './Email';
import FytThem from './FytThem';

function Cover(props) {
    return (
        <div className='coverOuter'> 
            <NavBar></NavBar>
            <div>
            <FytThem></FytThem>
            </div>
            
            
            
        </div>
    );
}

export default Cover;