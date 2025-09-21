'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Skeleton from '@/components/UI/skeleton/Skeleton';

const SwiperExample = () => {
  return (
    <div className='w-1/3'>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className='w-full'
      >
        <SwiperSlide>
          <Skeleton className='h-32 w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <Skeleton className='h-32 w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <Skeleton className='h-32 w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <Skeleton className='h-32 w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <Skeleton className='h-32 w-full' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperExample;
