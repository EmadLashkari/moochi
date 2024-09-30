import { BoxRow } from "@/utils/custom";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import ThemeToggler from "../buttons/themeChanger";
import MyDrawer from "../menu-drawer";

function Navbar() {
  return (
    <>
      <BoxRow
        sx={{
          width: "100vw",
          height: "70px",
          bgcolor: "background.default",
          boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.45)",
          padding: { xs: 1, sm: 2 },
        }}
      >
        <BoxRow>
          <MyDrawer />
        </BoxRow>
        <ThemeToggler />
        <BoxRow
          sx={{
            width: {
              xs: "calc( 100% - 55px )",
              sm: "calc( 100% - 180px )",
              md: "calc( 100% - 350px )",
            },
          }}
        >
          <TextField
            fullWidth
            size="medium"
            variant="outlined"
            placeholder="دنبال چی میگردی؟"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </BoxRow>
        {/* Logo */}
        <BoxRow
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <Image
            width={150}
            height={200}
            style={{ width: "150px", height: "100%" }}
            src="/images/Moochi_Logo.png"
            alt=""
          />
        </BoxRow>
      </BoxRow>
    </>
  );
}

export default Navbar;
