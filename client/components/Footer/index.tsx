import { BoxColumn, BoxRow } from "@/utils/custom";
import { Box } from "@mui/material";

function Footer() {
  return (
    <>
      <BoxRow
        sx={{
          width: "calc100svw",
          height: "500px",
          minHeight: "500px",
          p: 2,
          gap: 2,
          bgcolor: "primary.main",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        {/* Right */}
        <BoxColumn>
          <BoxColumn></BoxColumn>
          <Box></Box>
        </BoxColumn>
        {/* Left */}
        <BoxRow>
          <BoxColumn></BoxColumn>
          <Box></Box>
        </BoxRow>
      </BoxRow>
    </>
  );
}

export default Footer;
