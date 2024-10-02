import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

// Reusable box shadow style
const boxShadowStyle = {
  boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.45)",
  height: "100%",
  borderRadius: 1,
};

// Reusable height configuration
const heightConfig = {
  grid1: { xs: 1 / 6, sm: 2 / 3 },
  grid2: { xs: "calc(33.3% + 16.25px)", sm: 2 / 3 },
  grid3: { xs: 1 / 6, sm: 1 / 3 },
};

export default function Banner() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: {
          xs: "calc(100svh - 118px)",
          sm: "calc(100svh - 86px)",
        },
        padding: { xs: 1, sm: 2 },
      }}
    >
      <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ height: "100%" }}>
        <Grid size={{ xs: 12, sm: 8 }} sx={{ height: heightConfig.grid1 }}>
          <Box sx={boxShadowStyle}></Box>
        </Grid>

        <Grid
          container
          size={{ xs: 12, sm: 4 }}
          spacing={{ xs: 1, sm: 2 }}
          direction="column"
          sx={{ height: heightConfig.grid2 }}
        >
          {[...Array(2)].map((_, idx) => (
            <Grid key={idx} size={12} sx={{ flex: 1 }}>
              <Box sx={boxShadowStyle}></Box>
            </Grid>
          ))}
        </Grid>

        {[...Array(3)].map((_, idx) => (
          <Grid
            key={idx}
            size={{ xs: 12, sm: 4 }}
            sx={{ height: heightConfig.grid3 }}
          >
            <Box sx={boxShadowStyle}></Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
