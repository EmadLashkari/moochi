import { BoxRow } from "@/utils/custom";
import { IconButton } from "@mui/material";
import {
  X as XIcon,
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
  Pinterest as PinterestIcon,
  Reddit as RedditIcon,
} from "@mui/icons-material";
import Link from "next/link";

const socialMediaLinks = [
  { icon: <XIcon fontSize="inherit" />, url: "https://x.com", key: "x" },
  {
    icon: <RedditIcon fontSize="inherit" />,
    url: "https://reddit.com",
    key: "reddit",
  },
  {
    icon: <TelegramIcon fontSize="inherit" />,
    url: "https://telegram.com",
    key: "telegram",
  },
  {
    icon: <PinterestIcon fontSize="inherit" />,
    url: "https://pinterest.com",
    key: "pinterest",
  },
  {
    icon: <InstagramIcon fontSize="inherit" />,
    url: "https://instagram.com",
    key: "instagram",
  },
];

const iconButtonStyles = {
  bgcolor: "background.default",
  "&:hover": {
    bgcolor: "background.paper",
  },
  fontSize: { xs: 22, lg: 28 },
  p: { xs: 1.2, lg: 1.5 },
};

function FooterSocialButtons() {
  return (
    <BoxRow
      sx={{
        justifyContent: { xs: "center", sm: "flex-start" },
        flexWrap: "wrap",
        gap: { xs: 1.5, sm: 2, md: 2, lg: 3.5 },
        py: 2,
      }}
    >
      {socialMediaLinks.map(({ icon, url, key }) => (
        <Link key={key} href={url}>
          <IconButton sx={iconButtonStyles}>{icon}</IconButton>
        </Link>
      ))}
    </BoxRow>
  );
}

export default FooterSocialButtons;
