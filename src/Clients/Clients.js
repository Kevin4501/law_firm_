import React from 'react';
import Client1 from '../assets/ClientPhotos/1C.png'
import Client2 from '../assets/ClientPhotos/2C.png'
import Client3 from '../assets/ClientPhotos/3C.png'
import ClientsCard from './ClientsCard';
import {ReactComponent as Left} from '../assets/CarouselNavigations/CarouselLeftNavigation.svg'
import {ReactComponent as Right} from '../assets/CarouselNavigations/CarouselRightNavigation.svg'
import Carousel from './Carousel';
import './Clients.css'
function Clients(props) {
    let obj = [
        {
            image : Client1,
            name :"Jane Cooper",
            title : "Ceo of Hunt",
            para: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitFaliqua dolor do amet sint. Velit officia "
        },
        {
            image : Client2,
            name :"Devon Lane",
            title : "Ceo of Hunt",
            para: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitFaliqua dolor do amet sint. Velit officia "
        },
        {
            image : Client3,
            name :"Robert Fox",
            title : "Ceo of Hunt",
            para: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitFaliqua dolor do amet sint. Velit officia "
        }
    ]
    return (
        <div className='clientCover'>
            <div className='clientHead'>
                <p className='clientText'>What says our happy Clients</p>
                <div className='clientButtons'>
                    <Left/>
                    <Right/>
                </div>
            </div>
            <div className='clientCard'>
            {obj.map((data)=><ClientsCard data ={data}/>)}
            </div>
            
            
        </div>
    );
}

export default Clients;