import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // fade efektini ekleyin
import { Navigation, Pagination } from 'swiper'; // Navigasyon ve sayfalama modüllerini içe aktarın

// Swiper için gerekli modülleri etkinleştirin
Swiper.use([Navigation, Pagination]);

export default function CarouselSwiper() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" alt="slide4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" alt="slide5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" alt="slide6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" alt="slide7" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" alt="slide8" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" alt="slide9" />
      </SwiperSlide>
    </Swiper>
  );
}
