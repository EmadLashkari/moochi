import { BoxColumn, BoxRow } from "@/utils/custom";
import { Box, Button, Typography } from "@mui/material";
import ElectItem from "../ElectItem";
import { BarberShop } from "@/utils/Data";
import Image from "next/image";
interface ElectCompProps {
  data: BarberShop[];
}

function ElectComp({ data }: ElectCompProps) {
  return (
    <BoxColumn
      sx={{
        height: "100%",
        minHeight: "100%",
        width: "100%",
        minWidth: "100%",
        borderRadius: 3,
        boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.45)",
        justifyContent: "space-between",
        bgcolor: "primary.main",
        gap: "0px !important",
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "17% !important",
          minHeight: "17% !important",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      >
        <Image
          width={1000}
          height={1000}
          src="/images/barber-banner-img.jpg"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            objectFit: "cover",
          }}
          alt="barber-banner-img"
          priority
        />
        {/* <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          animation="wave"
          sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
        /> */}
      </Box>
      <BoxRow sx={{ p: 1.5 }}>
        <Typography variant="h6" color="white">
          منتخب
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ bgcolor: "background.default" }}
        >
          <Typography variant="button" color="text.primary">
            نمایش همه
          </Typography>
        </Button>
      </BoxRow>
      <BoxColumn
        sx={{ height: "calc(100% - 129.6px)", p: 1.5, pt: 0, gap: 1.5 }}
      >
        {data.map((barberShop) => (
          <ElectItem key={barberShop.id} barberShop={barberShop} />
        ))}
      </BoxColumn>
    </BoxColumn>
  );
}

export default ElectComp;
