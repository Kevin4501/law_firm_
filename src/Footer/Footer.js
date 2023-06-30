import React from 'react';
import Pintrest from '../assets/SocialMedia/Pintrest.png'
import FaceBook from '../assets/SocialMedia/Facebook.png'
import Twitter from '../assets/SocialMedia/Twitter.png'
import Insta from '../assets/SocialMedia/Insta.png'
import{ReactComponent as Logo1} from '../assets/logo.svg'
import'./Footer.css'
function Footer(props) {
    return (
        <div style={{margin:"50px"}}>
            <div className='firstOutDiv'>

                <div><Logo1/></div>
                <div className="home">
                    <p>Home</p>
                    <p>Attorneys</p>
                    <p>Practice Areas</p>
                    <p>About Us</p>
                </div>

                <div style={{display:"flex" , gap:"10px"}}>
                    <img src={Pintrest}/>
                    <img src={FaceBook}/>
                    <img src={Twitter}/>
                    <img src={Insta}/>
                </div>

            </div>
            <div className='secondDiv'>
                <p>© 2020 Acme. All right reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    );
}

export default Footer;