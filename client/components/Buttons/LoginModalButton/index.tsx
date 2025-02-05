import { Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface LoginModalButtonProps {
  onOpen: () => void;
}

const LoginModalButton: React.FC<LoginModalButtonProps> = ({ onOpen }) => {
  return (
    <Button
      variant="outlined"
      size="large"
      color="primary"
      fullWidth
      onClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
      endIcon={<AccountCircleIcon fontSize="large" />}
    >
      <Typography variant="h6">ورود به هرکات</Typography>
    </Button>
  );
};

export default LoginModalButton;
