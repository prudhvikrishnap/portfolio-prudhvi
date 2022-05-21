import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar1.jpeg'
import AVTR3 from '../../assets/avatar1.jpeg'
import AVTR4 from '../../assets/avatar1.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'Bill Gates',
    review:'He is nice a ncie guy. I have met him in class he is intellighent and smakrt and happy and ncie to bw around.He cared about'
  },{
    avatar:AVTR2,
    name:'Bill Gates',
    review:'He is nice'
  },{
    avatar:AVTR3,
    name:'Bill Gates',
    review:'He is nice'
  },{
    avatar:AVTR4,
    name:'Bill Gates',
    review:'He is nice'
  }
]



const Testimonials = () =>{
  return(
    <section id='testimonials'>
    <h5>Review</h5>
    <h2>Testimonials</h2>
    <Swiper className='container testimonials__container'
    modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
    {
      data.map(({avatar,name,review},index) =>{
        return(
          <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
          <img src={avatar} alt=''/>
            </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'> {review} </small>
          </SwiperSlide>
        )
      })
    }


    </Swiper>
     </section>
  )
}

export default Testimonials
