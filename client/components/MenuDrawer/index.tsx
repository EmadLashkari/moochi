"use client";

import * as React from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Article as ArticleIcon,
  Info as InfoIcon,
  Phone as PhoneIcon,
  Handshake as HandshakeIcon,
  EventSeat as EventSeatIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { BoxRow } from "@/utils/custom";
import InstallAppButton from "../Buttons/InstallAppButton";
import { ThemeTogglerButton } from "../Buttons/ThemeChangerButton";

export default function MyDrawer() {
  const [open, setOpen] = React.useState(false);

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
          <InstallAppButton />
        </ListItem>
        <ListItem>
          <ThemeTogglerButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <BoxRow>
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
    </BoxRow>
  );
}
