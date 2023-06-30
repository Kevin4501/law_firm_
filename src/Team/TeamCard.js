import React from 'react';
import'./TeamCard.css'
function TeamCard(props) {
    return (
        <div>
            <div className='teamcardWrapper'>
                <img className="teamImage"src={props.data.img}/>
                <div className='teamText'>
                <p className='teamName'>{props.data.name}</p>
                <p className='teamCase'>{props.data.cases}</p>
                </div>
                
            </div>
        </div>
    );
}

export default TeamCard;