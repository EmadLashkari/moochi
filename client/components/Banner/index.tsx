"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

// Reusable box shadow style
const boxShadowStyle = {
  boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.45)",
  height: "100%",
  maxHeight: "100%",
  borderRadius: 1,
};

// Reusable height configuration
const heightConfig = {
  grid1: { xs: 1 / 6, sm: 2 / 3 },
  grid2: { xs: "calc(33.3% + 16.25px)", sm: 2 / 3 },
  grid3: { xs: 1 / 6, sm: "calc(33.3%)" },
};

// Slide content for each Swiper
const slideContent = ["hi 1", "hi 2", "hi 3", "hi 4", "hi 5", "hi 6"];
const slideContentReverse = [...slideContent].reverse();
console.log(slideContent);
console.log(slideContentReverse);

// Configurable Swiper component
type SwiperConfigProps = {
  direction?: "horizontal" | "vertical";
  initialSlide: number;
  className: string;
  reverseDir: boolean;
  content: Array<string>;
};

const ConfigurableSwiper: React.FC<SwiperConfigProps> = ({
  direction = "horizontal",
  initialSlide,
  className,
  reverseDir = true,
  content,
}) => (
  <Swiper
    slidesPerView={1}
    initialSlide={initialSlide}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
      reverseDirection: reverseDir,
    }}
    pagination={false}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation]}
    className={className}
    style={{
      width: "100%",
      height: "100%",
    }}
    direction={direction}
    autoHeight={direction === "vertical"}
  >
    {content.map((text, index) => (
      <SwiperSlide key={index}>
        <p>{text}</p>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default function Banner() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: {
          xs: "calc(100svh - 70px)",
        },
        padding: { xs: 1, sm: 2 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          height: {
            xs: "calc(100% - 48px)",
            sm: "calc(100% - 16px)",
          },
        }}
      >
        <Grid size={{ xs: 12, sm: 8 }} sx={{ height: heightConfig.grid1 }}>
          <Box sx={boxShadowStyle}>
            <ConfigurableSwiper
              initialSlide={0}
              className="mySwiper0"
              reverseDir={true}
              content={slideContent}
            />
          </Box>
        </Grid>

        <Grid
          container
          size={{ xs: 12, sm: 4 }}
          spacing={{ xs: 1, sm: 2 }}
          direction="column"
          sx={{ height: heightConfig.grid2 }}
        >
          <Grid size={12} sx={{ flex: 1 }}>
            <Box sx={boxShadowStyle}>
              <ConfigurableSwiper
                initialSlide={1}
                direction="vertical"
                className="mySwiper1"
                reverseDir={true}
                content={slideContent}
              />
            </Box>
          </Grid>

          <Grid size={12} sx={{ flex: 1 }}>
            <Box sx={boxShadowStyle}>
              <ConfigurableSwiper
                initialSlide={2}
                direction="vertical"
                className="mySwiper2"
                reverseDir={true}
                content={slideContent}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }} sx={{ height: heightConfig.grid3 }}>
          <Box sx={boxShadowStyle}>
            <ConfigurableSwiper
              initialSlide={0}
              className={`mySwiper5`}
              reverseDir={false}
              content={slideContentReverse}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} sx={{ height: heightConfig.grid3 }}>
          <Box sx={boxShadowStyle}>
            <ConfigurableSwiper
              initialSlide={1}
              className={`mySwiper4`}
              reverseDir={false}
              content={slideContentReverse}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} sx={{ height: heightConfig.grid3 }}>
          <Box sx={boxShadowStyle}>
            <ConfigurableSwiper
              initialSlide={2}
              className={`mySwiper3`}
              reverseDir={false}
              content={slideContentReverse}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
