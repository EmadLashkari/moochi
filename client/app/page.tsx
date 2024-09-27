import { Box, TextField } from "@mui/material";

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
        </Box>
      </div>
    </>
  );
}

export default page;
