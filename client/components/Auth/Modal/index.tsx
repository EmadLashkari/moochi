import { BoxColumn } from "@/utils/custom";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  // Divider,
} from "@mui/material";

import {
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  // Google as GoogleIcon,
} from "@mui/icons-material";

interface LoginModalProps {
  openLoginModal: boolean;
  onCloseLoginModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  openLoginModal,
  onCloseLoginModal,
}) => {
  return (
    <Modal
      open={openLoginModal}
      onClose={onCloseLoginModal}
      aria-labelledby="modal-title"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90svw", sm: 450 },
          height: "80svh",
          minHeight: "600px",
          maxHeight: "800px",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <BoxColumn
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
          }}
        >
          <BoxColumn
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              textAlign={"center"}
              sx={{ mb: 2 }}
            >
              ورود یا ثبت‌نام در هرکات
            </Typography>
            <BoxColumn
              sx={{
                width: "100%",
                border: 0.5,
                borderColor: "#cccc",
                borderRadius: 3,
                p: 2,
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ m: "8px 0 16px 0" }}
              >
                برای ورود یا ثبت‌نام، اطلاعات کاربری خود را وارد کنید:
              </Typography>
              <form>
                <TextField
                  placeholder="ایمیل یا شماره تلفن"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <AccountCircleOutlinedIcon />
                        </InputAdornment>
                      ),
                      style: { direction: "ltr", marginBottom: "10px" },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Typography variant="h6" color="#fff">
                    ادامه
                  </Typography>
                </Button>
              </form>
              {/* <Divider sx={{ p: 2 }}>
                <Typography variant="body1" color="text.primary">
                  یا
                </Typography>
              </Divider>
              <Button
                variant="outlined"
                fullWidth
                sx={{ borderRadius: 5 }}
                startIcon={<GoogleIcon />}
              >
                <Typography variant="body1" color="text.default">
                  ورود با حساب کاربری گوگل
                </Typography>
              </Button> */}
            </BoxColumn>
          </BoxColumn>

          <Button
            variant="contained"
            color="secondary"
            onClick={onCloseLoginModal}
            sx={{ mt: 2 }}
          >
            <Typography variant="h6" color="#fff">
              بستن پنجره
            </Typography>
          </Button>
        </BoxColumn>
      </Box>
    </Modal>
  );
};

export default LoginModal;
