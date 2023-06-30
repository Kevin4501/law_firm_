import React from 'react';
import{ReactComponent as Logo} from '../assets/logo.svg'
import './NavBar.css'
function NavBar(props) {
    return (
        <div >
            <div className='navouterdiv'>
            <Logo ></Logo>
            <div className='navinnerdiv'>
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
            </div>
            <p><button className='button'>Contact Now</button></p>
            </div>
            
        </div>
    );
}

export default NavBar;