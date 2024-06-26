'use client';

import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid items-center bg-cover bg-center bg-[linear-gradient(90.00deg,rgba(21,21,21),rgba(21,21,21,0)100%),url(/assets/images/banner/1.jpg)] object-cover object-center rounded-lg h-[600px] ">
            <div className="text-white w-2/3 mx-auto ">
              <h2 className="text-6xl font-bold leading-normal ">
                Affordable Price For Car Servicing
              </h2>

              <p className="mt-3 font-normal leading-normal">
                Providing Professional Maintenance and Repair Services for All
                Makes and Models, Ensuring Your Vehicle's Optimal Performance
                and Safety on the Road
              </p>

              <div className="flex gap-8 mt-12">
                <button className="bg-[#FF3811] btn text-white border-none">
                  Discover More
                </button>
                <button className="bg-transparent  btn text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid items-center bg-cover bg-center bg-[linear-gradient(90.00deg,rgba(21,21,21),rgba(21,21,21,0)100%),url(/assets/images/banner/2.jpg)] object-cover object-center rounded-lg h-[600px]  ">
            <div className="text-white w-2/3 mx-auto ">
              <h2 className="text-6xl font-bold leading-normal ">
                Affordable Price For Car Servicing
              </h2>

              <p className="mt-3 font-normal leading-normal">
                Providing Professional Maintenance and Repair Services for All
                Makes and Models, Ensuring Your Vehicle's Optimal Performance
                and Safety on the Road
              </p>

              <div className="flex gap-8 mt-12">
                <button className="bg-[#FF3811] btn text-white border-none">
                  Discover More
                </button>
                <button className="bg-transparent  btn text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid items-center bg-cover bg-center bg-[linear-gradient(90.00deg,rgba(21,21,21),rgba(21,21,21,0)100%),url(/assets/images/banner/3.jpg)] object-cover object-center rounded-lg h-[600px]  ">
            <div className="text-white w-2/3 mx-auto ">
              <h2 className="text-6xl font-bold leading-normal ">
                Affordable Price For Car Servicing
              </h2>

              <p className="mt-3 font-normal leading-normal">
                Providing Professional Maintenance and Repair Services for All
                Makes and Models, Ensuring Your Vehicle's Optimal Performance
                and Safety on the Road
              </p>

              <div className="flex gap-8 mt-12">
                <button className="bg-[#FF3811] btn text-white border-none">
                  Discover More
                </button>
                <button className="bg-transparent  btn text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid items-center bg-cover bg-center bg-[linear-gradient(90.00deg,rgba(21,21,21),rgba(21,21,21,0)100%),url(/assets/images/banner/4.jpg)] object-cover object-center rounded-lg h-[600px]  ">
            <div className="text-white w-2/3 mx-auto ">
              <h2 className="text-6xl font-bold leading-normal ">
                Affordable Price For Car Servicing
              </h2>

              <p className="mt-3 font-normal leading-normal">
                Providing Professional Maintenance and Repair Services for All
                Makes and Models, Ensuring Your Vehicle's Optimal Performance
                and Safety on the Road
              </p>

              <div className="flex gap-8 mt-12">
                <button className="bg-[#FF3811] btn text-white border-none">
                  Discover More
                </button>
                <button className="bg-transparent  btn text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid items-center bg-cover bg-center bg-[linear-gradient(90.00deg,rgba(21,21,21),rgba(21,21,21,0)100%),url(/assets/images/banner/5.jpg)] object-cover object-center rounded-lg h-[600px]  ">
            <div className="text-white w-2/3 mx-auto ">
              <h2 className="text-6xl font-bold leading-normal ">
                Affordable Price For Car Servicing
              </h2>

              <p className="mt-3 font-normal leading-normal">
                Providing Professional Maintenance and Repair Services for All
                Makes and Models, Ensuring Your Vehicle's Optimal Performance
                and Safety on the Road
              </p>

              <div className="flex gap-8 mt-12">
                <button className="bg-[#FF3811] btn text-white border-none">
                  Discover More
                </button>
                <button className="bg-transparent  btn text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid items-center bg-cover bg-center bg-[linear-gradient(90.00deg,rgba(21,21,21),rgba(21,21,21,0)100%),url(/assets/images/banner/6.jpg)] object-cover object-center rounded-lg h-[600px]  ">
            <div className="text-white w-2/3 mx-auto ">
              <h2 className="text-6xl font-bold leading-normal ">
                Affordable Price For Car Servicing
              </h2>

              <p className="mt-3 font-normal leading-normal">
                Providing Professional Maintenance and Repair Services for All
                Makes and Models, Ensuring Your Vehicle's Optimal Performance
                and Safety on the Road
              </p>

              <div className="flex gap-8 mt-12">
                <button className="bg-[#FF3811] btn text-white border-none">
                  Discover More
                </button>
                <button className="bg-transparent  btn text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
