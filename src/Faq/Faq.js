import React from 'react';
import Faqtabs from './FaqTab';
import './Faq.css'
function Faq(props) {
    return (
        <div className='FaqWrapper'>
            <div className='Faq1'>
                <p className='faqLeftHead'>FAQ</p>
                <p className='faqLeftSub'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>
            <div className='Faq2'>
            <Faqtabs></Faqtabs>
            </div>
            
        </div>
    );
}

export default Faq;