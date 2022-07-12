/**
 * 상단 슬라이드 메인 페이지 뷰
 */
import './MainPageSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import MainPageSectionSlide1 from './slide/MainPageSectionSlide1';
import MainPageSectionSlide2 from './slide/MainPageSectionSlide2';
import MainPageSectionSlide3 from './slide/MainPageSectionSlide3';

const mainPageSection1 = () => {
  return (
    <div className='main-section'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='main-swiper-slide'
      >
        <SwiperSlide>
          <MainPageSectionSlide1 />
        </SwiperSlide>
        <SwiperSlide>
          <MainPageSectionSlide2 />
        </SwiperSlide>
        <SwiperSlide>
          <MainPageSectionSlide3 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default mainPageSection1;
