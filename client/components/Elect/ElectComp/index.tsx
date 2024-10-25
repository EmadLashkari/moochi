import { BoxColumn, BoxRow } from "@/utils/custom";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import ElectItem from "../ElectItem";
// import Image from "next/image";

function ElectComp() {
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
        {/* <Image
          width={200}
          height={200}
          src="/images/electSec.jpg"
          style={{width:'100%',height:'100%'}}
          alt="image"
        /> */}
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          animation="wave"
          sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
        />
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
        {/* Item  1 */}
        <ElectItem />
        {/* Item  2 */}
        <ElectItem />
        {/* Item  3 */}
        <ElectItem />
      </BoxColumn>
    </BoxColumn>
  );
}

export default ElectComp;
