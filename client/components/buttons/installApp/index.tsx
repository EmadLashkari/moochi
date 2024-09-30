import { Button, IconButton, Typography } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import { BoxRow } from "@/utils/custom";

function InstallAppButton() {
  return (
    <BoxRow>
      <Button
        fullWidth
        size="large"
        variant="contained"
        endIcon={<AndroidIcon fontSize="inherit" sx={{ color: "#fff" }} />}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
          },
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff" }}>
          نصب برنامه
        </Typography>
      </Button>
      <IconButton
        size="small"
        color="primary"
        sx={{
          bgcolor: "primary.main",
          display: {
            xs: "none",
            sm: "flex",
            md: "none",
          },
        }}
      >
        <AndroidIcon fontSize="large" sx={{ color: "#fff" }} />
      </IconButton>
    </BoxRow>
  );
}

export default InstallAppButton;
