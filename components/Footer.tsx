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
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/logo.png";
import { MENU } from "./Header";
import NavigationDrawer from "./NavigationDrawer";
import React from "react";

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

  const info =
    "Zigcy Lite is a customizer based WooCommerce Theme built to create stunning e-commerce or online stores.This theme that comes up with deep WooCommerce integration introduces all the WooCommerce features in the most brilliant way possible.";

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      className={style.footer}
      marginTop={5}
    >
      <Grid
        item
        md={5}
        sm={6}
        padding={2}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Grid item xs={12} padding={1} className={style.info}>
          <Image src={logo} alt="Logo" height={60} />
          <br />
          {info}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        padding={2}
        sx={{ display: { xs: "flex", sm: "none" } }}
        justifyContent="space-between"
      >
        <NavigationDrawer />
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={0} color="success">
            <Instagram fontSize="large" />
          </StyledBadge>
        </IconButton>
      </Grid>
      <Grid item xs={12} sx={{ display: { xs: "flex", sm: "none" } }}>
        <Grid
          item
          xs={12}
          padding={2}
          className={style.info}
          textAlign="center"
        >
          <Image src={logo} alt="Logo" height={40} />
          <br />
          {info}
        </Grid>
      </Grid>
      <Grid
        item
        md={5}
        sm={6}
        padding={2}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
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
