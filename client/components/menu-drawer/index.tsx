"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArticleIcon from "@mui/icons-material/Article"; // Icon for 'بلاگ'
import InfoIcon from "@mui/icons-material/Info"; // Icon for 'درباره ما'
import PhoneIcon from "@mui/icons-material/Phone"; // Icon for 'تماس با ما'
import HandshakeIcon from "@mui/icons-material/Handshake"; // Icon for 'همکاری با ما'
import EventSeatIcon from "@mui/icons-material/EventSeat";
import AndroidIcon from "@mui/icons-material/Android";
import { IconButton, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeContext } from "@/utils/context/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";

export default function MyDrawer() {
  const [open, setOpen] = React.useState(false);
  const { themeMode, toggleTheme } = useThemeContext();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: { xs: 200, sm: 250 } }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "رزرو", icon: <EventSeatIcon /> },
          { text: "بلاگ", icon: <ArticleIcon /> },
          { text: "درباره ما", icon: <InfoIcon /> },
          { text: "تماس با ما", icon: <PhoneIcon /> },
          { text: "همکاری با ما", icon: <HandshakeIcon /> },
        ].map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Button
            fullWidth
            size="large"
            variant="contained"
            endIcon={<AndroidIcon fontSize="inherit" sx={{ color: "#fff" }} />}
          >
            <Typography variant="h6" sx={{ color: "#fff" }}>
              نصب برنامه
            </Typography>
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
            endIcon={
              themeMode === "light" ? <LightModeIcon /> : <DarkModeIcon />
            }
          >
            <Typography variant="h6">
              {themeMode === "dark" ? "حالت تاریک" : "حالت روشن"}
            </Typography>
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        color="primary"
        sx={{
          color: "primary.main",
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize="large" sx={{ color: "text.primary" }} />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
