import { BoxColumn, BoxRow } from "@/utils/custom";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import {
  X as XIcon,
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
  Pinterest as PinterestIcon,
  Reddit as RedditIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import Image from "next/image";

function Footer() {
  return (
    <>
      <BoxRow
        sx={{
          width: "100svw",
          minHeight: "250px",
          p: 2,
          gap: 2,
          bgcolor: "primary.main",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
          },
          flex: 12,
          alignItems: "flex-start",
          columnGap: 0,
          rowGap: 0,
        }}
      >
        {/* Right */}
        <BoxRow
          sx={{
            flex: { xs: 12, sm: 8, md: 10 },
            height: 1,
            gap: 0,
            flexDirection: {
              xs: "column",
              md: "row",
            },
            width: 1,
          }}
        >
          <BoxColumn
            sx={{ flex: { xs: 6, sm: 4, md: 5 }, height: 1, width: 1, gap: 0 }}
          >
            {/* Right-Top */}
            <BoxColumn
              sx={{
                flexShrink: 1,
                height: 7 / 10,
                gap: 0,
                padding: { xs: 3, sm: 4 },
                paddingBottom: "0px !important",
              }}
            >
              <BoxColumn sx={{ flex: 1 / 4, pb: 1.5 }}>
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
              <BoxRow
                sx={{
                  flex: 1 / 4,
                  gap: 0,
                  justifyContent: "flex-start",
                  py: 2,
                }}
              >
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="پیامت چیه؟"
                  sx={{
                    bgcolor: "background.default",
                    borderRadius: 0,
                    flex: {
                      xs: 8 / 10,
                      sm: 8 / 10,
                      md: 8 / 10,
                      lg: 8 / 10,
                    },
                    borderEndStartRadius: "50px",
                    borderStartStartRadius: "50px",
                    "& fieldset": { border: "none" },
                  }}
                />
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    flex: { xs: 2 / 10, sm: 2 / 10, md: 2 / 10, lg: 1 / 10 },
                    height: "100%",
                    boxShadow: "none",
                    border: 4,
                    borderColor: "background.default",
                    borderRadius: 0,
                    borderEndEndRadius: "50px",
                    borderStartEndRadius: "50px",
                  }}
                >
                  <Typography variant="body1" color="background.default">
                    ارسال
                  </Typography>
                </Button>
              </BoxRow>
            </BoxColumn>
          </BoxColumn>
          {/* Middle */}
          <BoxColumn
            sx={{
              flex: { xs: 6, sm: 4, md: 5 },
              width: 1,
              height: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <BoxColumn
              sx={{
                height: 1,
                gap: 0,
                padding: { xs: 3, sm: 4 },
                pb: 0,
                maxWidth: "calc(100svw - 32px)",
              }}
            >
              <BoxColumn>
                <Typography
                  variant="h5"
                  color="background.default"
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  موچی رو در شبکه‌های اجتماعی دنبال کنید:
                </Typography>
              </BoxColumn>
              <BoxRow
                sx={{
                  justifyContent: { xs: "center", sm: "flex-start" },
                  flexWrap: "wrap",
                  gap: { xs: 1.5, sm: 2, md: 2, lg: 3.5 },
                  py: 2,
                }}
              >
                <IconButton
                  sx={{
                    bgcolor: "background.default",
                    "&:hover": {
                      bgcolor: "background.paper",
                    },
                    fontSize: { xs: 22, lg: 28 },
                    p: { xs: 1.2, lg: 1.5 },
                  }}
                >
                  <XIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "background.default",
                    "&:hover": {
                      bgcolor: "background.paper",
                    },
                    fontSize: { xs: 22, lg: 28 },
                    p: { xs: 1.2, lg: 1.5 },
                  }}
                >
                  <RedditIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    bgcolor: "background.default",
                    "&:hover": {
                      bgcolor: "background.paper",
                    },
                    fontSize: { xs: 22, lg: 28 },
                    p: { xs: 1.2, lg: 1.5 },
                  }}
                >
                  <TelegramIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    bgcolor: "background.default",
                    "&:hover": {
                      bgcolor: "background.paper",
                    },
                    fontSize: { xs: 22, lg: 28 },
                    p: { xs: 1.2, lg: 1.5 },
                  }}
                >
                  <PinterestIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    bgcolor: "background.default",
                    "&:hover": {
                      bgcolor: "background.paper",
                    },
                    fontSize: { xs: 22, lg: 28 },
                    p: { xs: 1.2, lg: 1.5 },
                  }}
                >
                  <InstagramIcon fontSize="inherit" />
                </IconButton>
              </BoxRow>
              <BoxColumn sx={{ gap: 0 }}>
                <Typography
                  variant="body1"
                  color="background.default"
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  پاسخگوی شما هستیم: شنبه تا چهارشنبه ۱۷-۹ | پنجشنبه ۱۴-۹
                </Typography>
                <BoxRow
                  sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
                >
                  <PhoneIcon sx={{ color: "background.default" }} />
                  <Typography
                    variant="body1"
                    color="background.default"
                    sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                    09423214412 - داخلی 6
                  </Typography>
                </BoxRow>
              </BoxColumn>
            </BoxColumn>
          </BoxColumn>
        </BoxRow>
        {/* Left */}
        <BoxColumn
          sx={{
            flex: 2,
            p: { xs: 3, md: 4 },
            alignItems: "center",
            width: 1,
            height: 1,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.default",
              p: 2,
              borderRadius: 4,
              maxHeight: 186,
            }}
          >
            <Image
              width={200}
              height={200}
              src={"/images/enamad.png"}
              alt="enamad"
              style={{ width: "100%", height: "100%", maxHeight: 122 }}
            />
          </Box>
        </BoxColumn>
      </BoxRow>
    </>
  );
}

export default Footer;
