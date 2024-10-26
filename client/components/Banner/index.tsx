"use client";

import { BoxColumn, BoxRow } from "@/utils/custom";
import { Box, useMediaQuery } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const slideContent = ["hi 1", "hi 2", "hi 3", "hi 4", "hi 5", "hi 6"];

const slidePerViewTopRight = {
  0: {
    slidesPerView: 1,
  },
};

const slidePerViewTopLeft = {
  0: {
    slidesPerView: 1,
  },
  850: {
    slidesPerView: 2,
  },
};

const slidePerViewBottom = {
  0: {
    slidesPerView: 1,
  },
  850: {
    slidesPerView: 2,
  },
  1300: {
    slidesPerView: 3,
  },
};

const boxStyle = {
  boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.45)",
  width: "100%",
  height: "100%",
  borderRadius: 1,
  bgcolor: "background.default",
};

type slidePerViewConfig = {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
};

type CarouselProps = {
  direction?: "horizontal" | "vertical";
  initialSlide: number;
  className: string;
  content: Array<string>;
  slidePerView: slidePerViewConfig;
  widthX: string;
  heightX: string;
};

const Carousel: React.FC<CarouselProps> = ({
  direction = "horizontal",
  initialSlide,
  className,
  content,
  slidePerView,
  widthX,
  heightX,
}) => (
  <Swiper
    initialSlide={initialSlide}
    loop={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={false}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation]}
    className={`mySwiper ${className}`}
    style={{
      width: "100%",
      height: "100%",
    }}
    direction={direction}
    breakpoints={slidePerView}
    spaceBetween={16}
  >
    {content.map((text, index) => (
      <SwiperSlide
        key={index}
        style={{
          minWidth: widthX,
          minHeight: heightX,
          borderRadius: "4px",
        }}
      >
        <Box sx={boxStyle}>{text}</Box>
      </SwiperSlide>
    ))}
  </Swiper>
);

function Banner() {
  const width850 = useMediaQuery("only screen and (max-width : 850px)");

  return (
    <BoxColumn
      sx={{
        width: "100svw",
        height: "calc(100svh - 70px)",
        p: 2,
        gap: 2,
        bgcolor: "primary.main",
      }}
    >
      {/* top */}
      <BoxRow
        sx={{
          width: "100%",
          height: "66%",
          gap: 2,
          "@media (max-width: 850px)": {
            flexDirection: "column",
            height: "66%",
          },
        }}
      >
        {/* top-right */}
        <BoxColumn
          sx={{
            width: "calc(66% + 4px)",
            height: "100%",
            "@media (max-width: 850px)": {
              width: "100%",
            },
          }}
        >
          <Carousel
            direction={"horizontal"}
            initialSlide={0}
            className={"CarouselTopRight"}
            content={slideContent}
            slidePerView={slidePerViewTopRight}
            widthX={width850 ? "100%" : "66%"}
            heightX={"100%"}
          />
        </BoxColumn>
        {/* top-left */}
        <BoxColumn
          sx={{
            width: "33%",
            height: "100%",
            gap: 2,
            "@media (max-width: 850px)": {
              height: "50%",
              width: "100%",
            },
          }}
        >
          <Carousel
            direction={"vertical"}
            initialSlide={1}
            className={"CarouselTopLeft"}
            content={slideContent}
            slidePerView={slidePerViewTopLeft}
            widthX={"100%"}
            heightX={"calc(50% - 8px)"}
          />
        </BoxColumn>
      </BoxRow>
      {/* bottom */}
      <BoxRow
        sx={{
          width: "100%",
          height: "33%",
          gap: 2,
        }}
      >
        <Carousel
          direction={"horizontal"}
          initialSlide={3}
          className={"CarouselBottom"}
          content={slideContent}
          slidePerView={slidePerViewBottom}
          widthX={"calc(33% - 8px)"}
          heightX={"100%"}
        />
      </BoxRow>
    </BoxColumn>
  );
}

export default Banner;
