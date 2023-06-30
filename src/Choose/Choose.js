import React from 'react';
import './Choose.css'
import ChooseCard from './ChooseCard';
function Choose(props) {
    return (
        <div>
            <div className='whychoose'>
                <p>Why Choose us?</p>
                <div className='choosecardWrapper'>
                <ChooseCard data = '98'></ChooseCard>
                <ChooseCard data = '100'></ChooseCard>
                <ChooseCard data = '100'></ChooseCard>
                </div>
                
            </div>
        </div>
    );
}

export default Choose;