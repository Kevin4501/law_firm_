import React from 'react';
import './Accordion.css';
import Plus  from '../assets/AccordionPlus.png'
function Accordion(props) {
    return (
        <div >
            <div className='AccordionWrapper'>
                <p>{props.data.txt}</p>
                <img src = {Plus} />
            </div>
        </div>
    );
}

export default Accordion;