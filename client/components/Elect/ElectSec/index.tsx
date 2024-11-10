"use client";

import { BoxRow } from "@/utils/custom";
import ElectComp from "../ElectComp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function ElectSec() {
  return (
    <>
      <BoxRow
        sx={{
          width: "100svw",
          minWidth: "100svw",
          height: { xs: "548px", sm: "630px" },
          minHeight: { xs: "548px", sm: "630px" },
        }}
      >
        <Swiper
          loop={true}
          spaceBetween={48}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          style={{
            width: "100%",
            height: "100%",
          }}
          className="mySwiper mySwiperElect"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            850: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide style={{ minWidth: "calc(33% - 32px)" }}>
            <ElectComp />
          </SwiperSlide>
          <SwiperSlide style={{ minWidth: "calc(33% - 32px)" }}>
            <ElectComp />
          </SwiperSlide>
          <SwiperSlide style={{ minWidth: "calc(33% - 32px)" }}>
            <ElectComp />
          </SwiperSlide>
        </Swiper>
      </BoxRow>
    </>
  );
}

export default ElectSec;
