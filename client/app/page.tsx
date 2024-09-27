import ThemeToggle from "@/components/themeChanger";
import { Box, TextField, Typography } from "@mui/material";

function page() {
  return (
    <>
      <div dir="rtl">
        <Box
          sx={{
            width: "100svw",
            height: "100svh",
            bgcolor: "background.default",
            padding: 2,
          }}
        >
          <TextField label={"hi"} dir="rtl" />
          <Typography variant="h1">سلام</Typography>
          <ThemeToggle />
        </Box>
      </div>
    </>
  );
}

export default page;
