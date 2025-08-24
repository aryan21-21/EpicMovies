import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import logo from "../../assets/Logo/logo.png";
import Navbar from "../NavBar/index.jsx";
import "./header.css";

function Index() {
  return (
    <>
      {/* Header Section */}
      <div className="container">
        <a href="/home">
          <img src={logo} alt="Logo" />
        </a>
        <span>Disclaimer</span>
        <span>How To Download?</span>
        <span>Join Our Group!</span>
        <span>Movie Request Page</span>
      </div>

      {/* Movie Swiper */}
      <div className="movie-card-bar">
        <Swiper
          spaceBetween={0}       // ✅ no space
          pagination={false}
          navigation={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },   // 📱 Mobile
            480: { slidesPerView: 3 },   // Small devices
            640: { slidesPerView: 4 },   // Tablets
            1024: { slidesPerView: 6 },  // Laptops
            1280: { slidesPerView: 8 },  // Desktops
            1536: { slidesPerView: 10 }, // Large screens
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {[
            "https://image.tmdb.org/t/p/w342/fjAAxDPzllwnCMqHDXYlw4IlkaL.jpg",
            "https://image.tmdb.org/t/p/w342/qggpZOGHps82F80lXPxtvtf9HnL.jpg",
            "https://image.tmdb.org/t/p/w342/qFR9az0RsVl93ESVleyl3O92vL.jpg",
            "https://catimages.org/images/2025/03/13/4.Fast..Furious.2009..jpg",
            "https://image.tmdb.org/t/p/w342/7ix8lfyJWL9H14NmRovMFoaN02u.jpg",
            "https://image.tmdb.org/t/p/w342/7p0nbWCGsHf2sgxJer2AuCx6zwF.jpg",
            "https://image.tmdb.org/t/p/w342/v9fNsN3WNXObKJjBWkiKMuT3XoR.jpg",
            "https://image.tmdb.org/t/p/w342/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
            "https://myimg.click/images/2021/01/09/KGF-Chapter.1-Poster-HDHub4u.uno.jpg",
            "https://image.tmdb.org/t/p/w342/zgxpT5Q5pe3FtL99F0UOIglPGrQ.jpg",
            "https://catimages.org/images/2025/07/18/Housefull-5A-2025-HDHub4u.Ms.jpg",
            "https://image.tmdb.org/t/p/w342/3AfHD1HoaQpQwKH8kxRdBKVmzeU.jpg",
          ].map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`Movie ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navbar Section */}
      <div className="navigation">
        <Navbar />
      </div>
    </>
  );
}

export default Index;
