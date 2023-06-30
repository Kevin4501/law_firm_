import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { useSwiper } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import {ReactComponent as Left} from '../assets/CarouselNavigations/CarouselLeftNavigation.svg'
import {ReactComponent as Right} from '../assets/CarouselNavigations/CarouselRightNavigation.svg'
import './Carousel.css'
const Controls = ({data})=>{
    const swiper = useSwiper();

    useEffect(() => {
      swiper.slideTo(0,null);
    }, [data]);
}
const Carousel = (props)=> {

  return (
    <div className="carouselWrapper">
      <Swiper
        style={{ padding: "0px 20px" , width:"100%"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={500}
        allowTouchMove
        
      >
        <Controls data ={props.data}/>
        {props.data.map(item=>{
            return(
                <SwiperSlide>{props.component(item)}</SwiperSlide>
        )
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;