"use client";

import * as React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Banner() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: {
          xs: "calc( 100svh - 118px )",
          sm: "calc( 100svh - 86px )",
        },
        padding: { xs: 1, sm: 2 },
      }}
    >
      <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ height: "100%" }}>
        <Grid
          size={{ xs: 12, sm: 8 }}
          sx={{ height: { xs: 1 / 6, sm: 2 / 3 } }}
        >
          <Item sx={{ height: "100%" }}></Item>
        </Grid>
        <Grid
          container
          size={{ xs: 12, sm: 4 }}
          spacing={{ xs: 1, sm: 2 }}
          direction="column"
          sx={{
            height: { xs: "calc(33.3% + 16.25px)", sm: 2 / 3 },
          }}
        >
          <Grid size={12} sx={{ flex: 1 }}>
            <Item sx={{ height: "100%" }}></Item>
          </Grid>
          <Grid size={12} sx={{ flex: 1 }}>
            <Item sx={{ height: "100%" }}></Item>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 4 }}
          sx={{ height: { xs: 1 / 6, sm: 1 / 3 } }}
        >
          <Item sx={{ height: "100%" }}></Item>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 4 }}
          sx={{ height: { xs: 1 / 6, sm: 1 / 3 } }}
        >
          <Item sx={{ height: "100%" }}></Item>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 4 }}
          sx={{ height: { xs: 1 / 6, sm: 1 / 3 } }}
        >
          <Item sx={{ height: "100%" }}></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
