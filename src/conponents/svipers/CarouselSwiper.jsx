// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade'; // fade efektini ekleyin
// // import { Navigation, Pagination } from 'swiper'; // Navigasyon ve sayfalama modüllerini içe aktarın

// // Swiper için gerekli modülleri etkinleştirin
// // Swiper.use([Navigation, Pagination]);

// export default function CarouselSwiper() {
//   return (
//     <Swiper
//       spaceBetween={30}
//       slidesPerView={1}
//       navigation
//       // pagination={{ clickable: true }}
//     >
//       <SwiperSlide>
//         <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" alt="slide1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" alt="slide2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" alt="slide3" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" alt="slide4" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" alt="slide5" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" alt="slide6" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" alt="slide7" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" alt="slide8" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" alt="slide9" />
//       </SwiperSlide>
//     </Swiper>
//   );
// }

// import React, { useState } from 'react';

// const CarouselSwiper = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleItems = 6;
//   const itemWidth = 120;

//   const nextSlide = () => {
//     const newIndex = (currentIndex + 1) % (items.length - visibleItems + 1);
//     setCurrentIndex(newIndex);
//   };

//   const prevSlide = () => {
//     const newIndex = (currentIndex - 1 + (items.length - visibleItems + 1)) % (items.length - visibleItems + 1);
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <button onClick={prevSlide}>Previous</button>
//       <div style={{ overflow: 'hidden', width: `${itemWidth * visibleItems}px`, height: '300px' }}>
//         <div style={{ display: 'flex', transform: `translateX(-${currentIndex * itemWidth}px)` }}>
//           {items.map((item, index) => (
//             <div key={index} style={{ width: `${itemWidth}px`, height: '300px' }}>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// };

// export default CarouselSwiper;


// import React, { useState } from "react";
// import styles from "./carouselSwiper.module.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Keyboard, Scrollbar, Navigation, Pagination, EffectFade } from 'swiper/modules'; 

// // import { Navigation, Pagination } from 'swiper';

// const CarouselSwiper = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleItems = 6;
//   const itemWidth = 120;

//   const nextSlide = () => {
//     const newIndex = (currentIndex + 1) % (items.length - visibleItems + 1);
//     setCurrentIndex(newIndex);
//   };

//   const prevSlide = () => {
//     const newIndex = (currentIndex - 1 + (items.length - visibleItems + 1)) % (items.length - visibleItems + 1);
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className={styles.carouselContainer}>
//       <div className={styles.carouselButton} onClick={prevSlide}>
//         Previous
//       </div>
//       <div className={styles.carouselWrapper}>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           loop={true}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           className="mySwiper"
//         >
//           {items.map((item, index) => (
//             <SwiperSlide key={index} style={{ width: `${itemWidth}px`, height: '300px' }}>
//               {item}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className={styles.carouselButton} onClick={nextSlide}>
//         Next
//       </div>
//     </div>
//   );
// };

// export default CarouselSwiper;
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import styles from "./carouselSwiper.module.css";

const CarouselSwiper = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 6;
  const itemWidth = 120;

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % (items.length - visibleItems + 1);
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + (items.length - visibleItems + 1)) % (items.length - visibleItems + 1);
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselButton} onClick={prevSlide}>
        Previous
      </div>
      <div className={styles.carouselWrapper}>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.carouselButton} onClick={nextSlide}>
        Next
      </div>
    </div>
  );
};

export default CarouselSwiper;