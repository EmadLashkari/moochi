import Banner from "@/components/Banner";
import ElectSec from "@/components/Elect/ElectSec";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

function page() {
  return (
    <>
      <Box sx={{ position: "fixed", zIndex: 500 }}>
        <Navbar />
      </Box>
      <Box sx={{ mt: "70px" }}>
        <Banner />
      </Box>
      <ElectSec />
      <Footer />
    </>
  );
}

export default page;
