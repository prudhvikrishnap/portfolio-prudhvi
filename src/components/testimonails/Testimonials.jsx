import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.webp'
import AVTR4 from '../../assets/avatar4.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'Bill Gates',
    review:'All my windows are open for his ideas.'
  },{
    avatar:AVTR2,
    name:'Steve Jobs',
    review:'He thinks different.'
  },{
    avatar:AVTR3,
    name:'Elon Musk',
    review:'He is my co-passenger when I go to Mars.'
  },{
    avatar:AVTR4,
    name:'Jeff Bezoz',
    review:'No, he is my co-passenger.'
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
