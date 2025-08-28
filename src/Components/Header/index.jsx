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
        <a href="Disclaimer">
          <span>Disclaimer</span>
        </a>
        <a href="Download">
          <span>How To Download?</span>
        </a>
        <a href="Group">
          <span>Join Our Group!</span>
        </a>
        <a href="Request">
        <span>Movie Request Page</span>
        </a>
      </div>

      {/* Movie Swiper */}
      <div className="movie-card-bar">
        <Swiper
        spaceBetween={0}        // ✅ no gap between slides
        slidesPerView={13}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper no-space-swiper"   
      >
      {[  
            "https://image.tmdb.org/t/p/w342/u7M4LAaFVcwLr3sLsuORHPncTup.jpg",
            "https://image.tmdb.org/t/p/w342/1H9hdeRoniz30RKhyr1uLdBTfpG.jpg",
            "https://image.tmdb.org/t/p/w342/1I0ORYrbqZxtKmuwsoRIaajUvBg.jpg",
            "https://image.tmdb.org/t/p/w342/5DJbIWxIotQYUnRrRGhSxjxmvye.jpg",
            "https://image.tmdb.org/t/p/w342/qTNIxDIzKjLLuS17fxdXjcKAlW7.jpg",
            "https://image.tmdb.org/t/p/w342/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",
            "https://image.tmdb.org/t/p/w342/1upx2GVqb9cxE7e376X83VTI7hz.jpg",
            "https://image.tmdb.org/t/p/w342/4MVGcnBYTzWQR6J8Z9g3obhZqxf.jpg",
            "https://image.tmdb.org/t/p/w342/vqw8D35ZBcb09VI9hvedgyd7FQD.jpg",
            "https://image.tmdb.org/t/p/w342/6x0wmp2LlLqhEbd8XKjJpTHdHsT.jpg",
            "https://image.tmdb.org/t/p/w342/gcSNS5cy1iOmYawIdJCzoc873rQ.jpg",
            "https://image.tmdb.org/t/p/w342/1I0ORYrbqZxtKmuwsoRIaajUvBg.jpg",
            "https://image.tmdb.org/t/p/w342/iyxwxDZCpIm0vIORaHpmgJv2BGF.jpg",
            "https://image.tmdb.org/t/p/w342/6x0wmp2LlLqhEbd8XKjJpTHdHsT.jpg",
            "https://image.tmdb.org/t/p/w342/u7M4LAaFVcwLr3sLsuORHPncTup.jpg",
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
