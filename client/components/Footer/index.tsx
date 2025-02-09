import { BoxColumn, BoxRow } from "@/utils/custom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Phone as PhoneIcon } from "@mui/icons-material";
import Image from "next/image";
import FooterSocialButtons from "../Buttons/FooterSocialsButton";

// Common style constants
const commonStyles = {
  textWhite: { color: "background.default" },
  centeredFlexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  fullWidthHeight: { width: 1, height: 1 },
};

// Component-specific style constants
const footerStyles = {
  footerContainer: {
    width: "100svw",
    minHeight: "250px",
    p: 2,
    gap: 0,
    bgcolor: "primary.main",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "flex-start",
    // flexWrap: { xs: "wrap", sm: "nowrap", md: "nowrap" },
    "@media (max-width: 700px)": { flexWrap: "wrap" },
  },
  textField: {
    bgcolor: "background.default",
    borderRadius: 0,
    flex: 0.8,
    borderEndStartRadius: "50px",
    borderStartStartRadius: "50px",
    "& fieldset": { border: "none" },
  },
  sendButton: {
    flex: 0.2,
    height: "100%",
    boxShadow: "none",
    border: 4,
    borderColor: "background.default",
    borderRadius: "50px",
  },
};

// Footer Top Component
const FooterTop = () => (
  <BoxColumn
    sx={{
      ...commonStyles.fullWidthHeight,
      gap: 1,
      p: { xs: 3, sm: 4 },
      paddingBottom: 0,
    }}
  >
    <Typography variant="h4" sx={commonStyles.textWhite}>
      موچی چیه؟
    </Typography>
    <Typography variant="body1" sx={commonStyles.textWhite}>
      با یه کلیک، در هر آرایشگاهی که دوست داری موهاتو کوتاه کن.
    </Typography>
    <Typography variant="body1" sx={commonStyles.textWhite}>
      شماره تماست رو داخل این باکس بنویس، در اولین فرصت با شما تماس می‌گیریم.
    </Typography>
    <BoxRow
      sx={{
        my: 2,
        gap: 0,
        bgcolor: "background.default",
        borderRadius: "50px",
      }}
    >
      <TextField
        size="small"
        variant="outlined"
        placeholder="پیامت چیه؟"
        sx={footerStyles.textField}
      />
      <Button variant="contained" size="small" sx={footerStyles.sendButton}>
        <Typography variant="body1" sx={commonStyles.textWhite}>
          ارسال
        </Typography>
      </Button>
    </BoxRow>
  </BoxColumn>
);

// Footer Middle Component
const FooterMiddle = () => (
  <BoxColumn
    sx={{
      ...commonStyles.fullWidthHeight,
      justifyContent: "flex-start",
      alignItems: { xs: "center", sm: "flex-start", md: "center" },
      "@media (max-width: 700px)": { alignItems: "center" },
      p: { xs: 3, md: 4 },
    }}
  >
    <Typography
      variant="h5"
      sx={{
        ...commonStyles.textWhite,
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      موچی رو در شبکه‌های اجتماعی دنبال کنید:
    </Typography>
    <FooterSocialButtons />
    <BoxColumn sx={{ gap: 0 }}>
      <Typography
        variant="body1"
        sx={{
          ...commonStyles.textWhite,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        پاسخگوی شما هستیم: شنبه تا چهارشنبه ۱۷-۹ | پنجشنبه ۱۴-۹
      </Typography>
      <BoxRow sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}>
        <PhoneIcon sx={commonStyles.textWhite} />
        <Typography variant="body1" sx={commonStyles.textWhite}>
          09423214412 - داخلی 6
        </Typography>
      </BoxRow>
    </BoxColumn>
  </BoxColumn>
);

// Footer Left Component
const FooterLeft = () => (
  <BoxColumn
    sx={{
      ...commonStyles.fullWidthHeight,
      justifyContent: "center",
      alignItems: "center",
      p: { xs: 3, md: 4 },
      width: { xs: 1, sm: 0.5 },
      "@media (max-width: 700px)": { width: 1 },
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
);

// Main Footer Component
function Footer() {
  return (
    <BoxRow sx={footerStyles.footerContainer}>
      <FooterTop />
      <FooterMiddle />
      <FooterLeft />
    </BoxRow>
  );
}

export default Footer;
