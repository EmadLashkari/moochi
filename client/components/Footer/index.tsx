import { BoxColumn, BoxRow } from "@/utils/custom";
import { Box, Button, TextField, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <BoxRow
        sx={{
          width: "100svw",
          height: "350px",
          p: 2,
          gap: 2,
          bgcolor: "primary.main",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          flex: 2,
        }}
      >
        {/* Right */}
        <BoxColumn sx={{ flex: 1, height: 1 }}>
          {/* Right-Top */}
          <BoxColumn sx={{ flexShrink: 1, height: 7 / 10, gap: 0, padding: 4 }}>
            <BoxColumn sx={{ flex: 1 / 4 }}>
              <Typography variant="h4" color="background.default">
                موچی چیه؟
              </Typography>
            </BoxColumn>
            <BoxColumn sx={{ flex: 1 / 4 }}>
              <Typography variant="body1" color="background.default">
                با یه کلیک، در هر آرایشگاهی که دوست داری موهاتو کوتاه کن.
              </Typography>
            </BoxColumn>
            <BoxColumn sx={{ flex: 1 / 4 }}>
              <Typography variant="body1" color="background.default">
                شماره تماست رو داخل این باکس بنویس، در اولین فرصت با شما تماس
                می‌گیریم.
              </Typography>
            </BoxColumn>

            <BoxRow sx={{ flex: 1 / 4 }}>
              <TextField
                fullWidth
                size="medium"
                variant="outlined"
                sx={{ bgcolor: "background.default" }}
              />
              <Button></Button>
            </BoxRow>
          </BoxColumn>
          {/* Right-Bottom */}
          <Box sx={{ flexShrink: 1, height: 3 / 10 }}>hi</Box>
        </BoxColumn>
        {/* Left */}
        <BoxRow sx={{ flex: 1, height: 1 }}>
          <BoxColumn>h</BoxColumn>
          <Box></Box>
        </BoxRow>
      </BoxRow>
    </>
  );
}

export default Footer;
