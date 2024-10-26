import { BoxColumn, BoxRow } from "@/utils/custom";
import { Box, IconButton, Rating, Skeleton, Typography } from "@mui/material";
import {
  Place as PlaceIcon,
  Percent as PercentIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  LocalOffer as LocalOfferIcon,
} from "@mui/icons-material";

function ElectItem() {
  return (
    <BoxRow
      sx={{
        height: 1 / 3,
        minHeight: { xs: "80px", sm: "100px" },
        maxHeight: { xs: "96px", sm: "116px" },
        borderRadius: 1,
        boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.45)",
        width: "100%",
        cursor: "pointer",
        gap: 0,
        bgcolor: "background.default",
      }}
    >
      <BoxRow sx={{ height: "100%", gap: 0 }}>
        <Box
          sx={{
            width: { xs: "80px", sm: "100px" },
            height: { xs: "80px", sm: "100px" },
            padding: 1,
            borderRadius: 1,
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
            sx={{ borderRadius: 1 }}
          />
        </Box>
        <BoxColumn
          sx={{ gap: 0, height: "100%", justifyContent: "space-evenly" }}
        >
          <Typography variant="h6" lineHeight={1.2}>
            ستاره ربیعی
          </Typography>
          <BoxRow sx={{ gap: 0.5, alignItems: "flex-start" }}>
            <PlaceIcon
              fontSize="inherit"
              sx={{ color: "grey", lineHeight: 1 }}
            />
            <Typography variant="body2" sx={{ lineHeight: 1, color: "grey" }}>
              تهران منطقه 7، شریعتی
            </Typography>
          </BoxRow>
          <Rating
            name="read-only"
            value={2.4}
            readOnly
            precision={0.1}
            sx={{ fontSize: { xs: 20, sm: 25 } }}
          />
        </BoxColumn>
      </BoxRow>
      <BoxRow>
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
  );
}

export default ElectItem;
