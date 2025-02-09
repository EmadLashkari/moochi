"use client";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { EffectCreative } from "swiper/modules";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BoxColumn } from "@/utils/custom";

// Sample slide content
const slideContent = [
  "/images/banner-1.webp",
  "/images/banner-1.webp",
  "/images/banner-1.webp",
  "/images/banner-1.webp",
  "/images/banner-1.webp",
  "/images/banner-1.webp",
];

const boxStyle = {
  width: "100%",
  height: "100%",
  userSelect: "none,",
  borderRadius: "25px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
};

const Carousel = () => (
  <Swiper
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop
    slidesPerView={1.05}
    centeredSlides
    navigation
    className="mySwiper banner--swiper"
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "25px",
      direction: "ltr",
    }}
    modules={[Autoplay, Navigation, EffectCreative]}
    grabCursor={true}
    effect={"creative"}
    creativeEffect={{
      prev: {
        translate: ["-24%", 0, -400],
      },
      next: {
        translate: ["24%", 0, -400],
      },
      progressMultiplier: 1,
      shadowPerProgress: true,
    }}
  >
    {slideContent.map((url, index) => (
      <SwiperSlide key={index}>
        <Box sx={boxStyle} className="slide-content">
          <Image
            width={10000}
            height={10000}
            src={url}
            alt={`Slide ${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "25px",
              userSelect: "none",
            }}
            priority
          />
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default function Banner() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => setDomLoaded(true), []);

  return (
    <BoxColumn
      sx={{
        width: "100svw",
        height: "calc( 100svh - 70px )",
        maxHeight: { xs: 300, sm: 400, md: 500, lg: 600, xl: 700 },
        minHeight: { xs: 200, sm: 300, md: 400, lg: 500, xl: 600 },
        bgcolor: "background.default",
        userSelect: "none",
      }}
    >
      {domLoaded && <Carousel />}
    </BoxColumn>
  );
}
