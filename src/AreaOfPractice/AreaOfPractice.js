import React from 'react';
import ImageGrid from './ImageGrid';
import'./AreaOfPractice.css'
function AreaOfPractice(props) {
    return (
        <div className='areaOut'>
            <div className='areaText'>
            Area of Practices
            </div>
        <ImageGrid></ImageGrid>
        </div>
    );
}

export default AreaOfPractice;