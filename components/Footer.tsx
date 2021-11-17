import {
  Badge,
  BadgeProps,
  Button,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import style from "../styles/Footer.module.scss";
import { Instagram } from "@mui/icons-material";
import { MENU } from "../constants";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/logo.png";

const Footer = () => {
  const router = useRouter();
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Grid
      container
      item
      xs
      justifyContent="center"
      className={style.footer}
      marginTop={2}
    >
      <Grid item xs={5} padding={2}>
        <Grid item xs textAlign="start" padding={2}>
          <Image src={logo} alt="Logo" height={60} />
        </Grid>
        <Grid item xs padding={2} className={style.info}>
          Zigcy Lite is a customizer based WooCommerce Theme built to create
          stunning e-commerce or online stores.This theme that comes up with
          deep WooCommerce integration introduces all the WooCommerce features
          in the most brilliant way possible.
        </Grid>
      </Grid>
      <Grid item xs={5} padding={2}>
        <Grid item xs padding={2}>
          {MENU.map((item, index) => (
            <Button
              onClick={() => router.push(item.href)}
              key={index}
              className={style.button}
            >
              {item.text}
            </Button>
          ))}
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="success">
              <Instagram fontSize="large" />
            </StyledBadge>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
