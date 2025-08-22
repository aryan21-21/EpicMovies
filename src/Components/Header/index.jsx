import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import logo from "../../assets/Logo/logo.png"
import Navbar from '../NavBar/index.jsx'
import "./header.css"
function index() {
  return (
    <>
        <div className="container">
        <a href="/home">
          <img src={logo} alt="Logo" />
        </a>
        <span>
          Disclaimer
        </span>
        <span>
          How To Download?
        </span>
        <span>
          Join Our Group!
        </span>
        <span>
          Movie Request Page
        </span>
      </div>
        
      <div className="movie-card-bar" >
       <Swiper
       slidesPerView={10}
  spaceBetween={0}
  slidesPerGroup={1}
  pagination={false}
  navigation={false}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
  }}
  loop={true}
  modules={[Navigation, Autoplay]}
  className="mySwiper"
  breakpoints={{
    320: { slidesPerView: 2 },   // small phones
    480: { slidesPerView: 3 },   // large phones
    640: { slidesPerView: 4 },   // tablets
    768: { slidesPerView: 5 },   // small laptops
    1024: { slidesPerView: 7 },  // desktops
    1440: { slidesPerView: 10 }, // big screens
  }}
>

        
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w342/fjAAxDPzllwnCMqHDXYlw4IlkaL.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w342/qggpZOGHps82F80lXPxtvtf9HnL.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w342/qFR9az0RsVl93ESVleyl3O92vL.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://catimages.org/images/2025/03/13/4.Fast..Furious.2009..jpg" alt="" />
        </SwiperSlide>  
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w342/7ix8lfyJWL9H14NmRovMFoaN02u.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w342/7p0nbWCGsHf2sgxJer2AuCx6zwF.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w342/v9fNsN3WNXObKJjBWkiKMuT3XoR.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w342/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://myimg.click/images/2021/01/09/KGF-Chapter.1-Poster-HDHub4u.uno.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w342/zgxpT5Q5pe3FtL99F0UOIglPGrQ.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://catimages.org/images/2025/07/18/Housefull-5A-2025-HDHub4u.Ms.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w342/3AfHD1HoaQpQwKH8kxRdBKVmzeU.jpg" alt="" />
        </SwiperSlide>
        </Swiper>
      </div>
      <div className="navigation">
        <Navbar></Navbar>
      </div>
    </>
  )
}

export default index
