import { BoxRow } from "@/utils/custom";
import Image from "next/image";
import MyDrawer from "../MenuDrawer";
import SearchBar from "../SearchBar";
import { ThemeTogglerIconButton } from "../Buttons/ThemeChangerButton";

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
        <BoxRow sx={{ width: "100%", justifyContent: "flex-start" }}>
          <MyDrawer />
          <ThemeTogglerIconButton />
          <SearchBar />
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
