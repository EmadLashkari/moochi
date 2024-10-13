import { BoxColumn, BoxRow } from "@/utils/custom";
import {
  Box,
  Button,
  IconButton,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
// import Image from "next/image";
import {
  Place as PlaceIcon,
  Percent as PercentIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  LocalOffer as LocalOfferIcon,
} from "@mui/icons-material";

function ElectComp() {
  return (
    <BoxColumn
      sx={{
        height: "100%",
        width: { xs: "100%", md: "33%" },
        borderRadius: 1,
        boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.45)",
        justifyContent: "space-between",
        bgcolor: "background.default",
        gap: "0px !important",
        userSelect: "none",
      }}
    >
      <Box sx={{ width: "100%", height: 1 / 5 }}>
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
        />
      </Box>
      <BoxRow sx={{ p: 1.5 }}>
        <Typography variant="h6">منتخب</Typography>
        <Button variant="contained" size="small">
          <Typography variant="button">نمایش همه</Typography>
        </Button>
      </BoxRow>
      <BoxColumn
        sx={{ height: "calc(100% - 141.6px)", p: 1.5, pt: 0, gap: 1.5 }}
      >
        {/* Item  1 */}
        <BoxRow
          sx={{
            height: 1 / 3,
            borderRadius: 1,
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.45)",
            width: "100%",
            cursor: "pointer",
          }}
        >
          <BoxRow sx={{ height: "100%" }}>
            <Box sx={{ height: "100%", p: 1, width: "100px", borderRadius: 1 }}>
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
                sx={{ borderRadius: 1 }}
              />
            </Box>
            <BoxColumn sx={{ gap: 0 }}>
              <Typography variant="h6">ستاره ربیعی</Typography>
              <BoxRow sx={{ gap: 0.5 }}>
                <PlaceIcon fontSize="inherit" sx={{ color: "grey" }} />
                <Typography variant="body1">تهران منطقه 7، شریعتی</Typography>
              </BoxRow>
              <Rating name="read-only" value={2.4} readOnly precision={0.1} />
            </BoxColumn>
          </BoxRow>
          <BoxRow>
            <Box />
            <BoxColumn sx={{ gap: 0, pr: 1 }}>
              <IconButton size="small" disabled>
                <PercentIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small" disabled>
                <WorkspacePremiumIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small" disabled>
                <LocalOfferIcon fontSize="inherit" />
              </IconButton>
            </BoxColumn>
          </BoxRow>
        </BoxRow>
        {/* Item  2 */}
        <BoxRow
          sx={{
            height: 1 / 3,
            borderRadius: 1,
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.45)",
            width: "100%",
            cursor: "pointer",
          }}
        >
          <BoxRow sx={{ height: "100%" }}>
            <Box sx={{ height: "100%", p: 1, width: "100px", borderRadius: 1 }}>
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
                sx={{ borderRadius: 1 }}
              />
            </Box>
            <BoxColumn sx={{ gap: 0 }}>
              <Typography variant="h6">ستاره ربیعی</Typography>
              <BoxRow sx={{ gap: 0.5 }}>
                <PlaceIcon fontSize="inherit" sx={{ color: "grey" }} />
                <Typography variant="body1">تهران منطقه 7، شریعتی</Typography>
              </BoxRow>
              <Rating name="read-only" value={2.4} readOnly precision={0.1} />
            </BoxColumn>
          </BoxRow>
          <BoxRow>
            <Box />
            <BoxColumn sx={{ gap: 0, pr: 1 }}>
              <IconButton size="small" disabled>
                <PercentIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small" disabled>
                <WorkspacePremiumIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small" disabled>
                <LocalOfferIcon fontSize="inherit" />
              </IconButton>
            </BoxColumn>
          </BoxRow>
        </BoxRow>
        {/* Item  3 */}
        <BoxRow
          sx={{
            height: 1 / 3,
            borderRadius: 1,
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.45)",
            width: "100%",
            cursor: "pointer",
          }}
        >
          <BoxRow sx={{ height: "100%" }}>
            <Box sx={{ height: "100%", p: 1, width: "100px", borderRadius: 1 }}>
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
                sx={{ borderRadius: 1 }}
              />
            </Box>
            <BoxColumn sx={{ gap: 0 }}>
              <Typography variant="h6">ستاره ربیعی</Typography>
              <BoxRow sx={{ gap: 0.5 }}>
                <PlaceIcon fontSize="inherit" sx={{ color: "grey" }} />
                <Typography variant="body1">تهران منطقه 7، شریعتی</Typography>
              </BoxRow>
              <Rating name="read-only" value={2.4} readOnly precision={0.1} />
            </BoxColumn>
          </BoxRow>
          <BoxRow>
            <Box />
            <BoxColumn sx={{ gap: 0, pr: 1 }}>
              <IconButton size="small" disabled>
                <PercentIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small" disabled>
                <WorkspacePremiumIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small" disabled>
                <LocalOfferIcon fontSize="inherit" />
              </IconButton>
            </BoxColumn>
          </BoxRow>
        </BoxRow>
      </BoxColumn>
    </BoxColumn>
  );
}

export default ElectComp;
