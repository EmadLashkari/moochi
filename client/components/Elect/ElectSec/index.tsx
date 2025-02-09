"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { BoxRow } from "@/utils/custom";
import ElectComp from "../ElectComp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { barberData } from "@/utils/Data";
import type { BarberShop } from "@/utils/Data";

// Function to get top 3 barbershops
function getTopBarbershops(data: BarberShop[], topN: number = 3): BarberShop[] {
  return data.sort((a, b) => b.rating - a.rating).slice(0, topN);
}
const top3Barbershops = getTopBarbershops(barberData);

const Carousel = () => (
  <>
    <Swiper
      loop={true}
      spaceBetween={48}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      style={{ width: "100%", height: "100%" }}
      className="mySwiper elect--swiper"
      breakpoints={{
        0: { slidesPerView: 1 },
        850: { slidesPerView: 2 },
        1300: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide style={{ minWidth: "calc(33% - 32px)" }}>
        <ElectComp data={top3Barbershops} />
      </SwiperSlide>
      <SwiperSlide style={{ minWidth: "calc(33% - 32px)" }}>
        <ElectComp data={top3Barbershops} />
      </SwiperSlide>
      <SwiperSlide style={{ minWidth: "calc(33% - 32px)" }}>
        <ElectComp data={top3Barbershops} />
      </SwiperSlide>
    </Swiper>
  </>
);

function ElectSec() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => setDomLoaded(true), []);

  const title = `Hercut - Best Barbers: ${top3Barbershops
    .map((b) => b.name)
    .join(", ")}`;
  const description = `Find the top-rated barbers in Iran. Featured: ${top3Barbershops
    .map((b) => `${b.name} (${b.address})`)
    .join(", ")}`;

  return (
    <>
      {/* Dynamic Metadata */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={top3Barbershops[0]?.imgUrl} />
      </Head>

      {/* Swiper Carousel */}
      <BoxRow
        sx={{
          width: "100svw",
          minWidth: "100svw",
          height: { xs: "548px", sm: "630px" },
          minHeight: { xs: "548px", sm: "630px" },
        }}
      >
        {domLoaded && <Carousel />}
      </BoxRow>
    </>
  );
}

export default ElectSec;
