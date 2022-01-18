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
import { MENU } from "./Header";
import NavigationDrawer from "./NavigationDrawer";
import React from "react";

const Footer = () => {
  const router = useRouter();

  const info = (
    <>
      ЧПУ столярная мастерская. Собственное производство <br />
      Изготовление изделий из дерева, серийныx изделий и индивидуальныx заказов
      <br />
    </>
  );

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
      xs={12}
      justifyContent="center"
      className={style.footer}
      marginTop={5}
    >
      <Grid
        container
        item
        md={5}
        sm={6}
        padding={2}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        {/*<Grid item xs={12}>*/}
        {/*  <Image src={logo} alt="Logo" onClick={() => router.push(PATH.HOME)} />*/}
        {/*</Grid>*/}
        <Grid item xs={12} padding={1} className={style.info}>
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
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        {/*<Grid item xs={8} className={style.info} textAlign="center">*/}
        {/*  <Image src={logo} alt="Logo" onClick={() => router.push(PATH.HOME)} />*/}
        {/*</Grid>*/}
        <Grid
          item
          xs={12}
          padding={2}
          className={style.info}
          textAlign="center"
        >
          {info}
        </Grid>
      </Grid>
      <Grid
        item
        md={5}
        sm={6}
        padding={2}
        sx={{ display: { xs: "none", sm: "flex" } }}
        textAlign="right"
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/mibbrend/"
          >
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={0} color="success">
                <Instagram fontSize="large" />
              </StyledBadge>
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
