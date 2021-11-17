import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { MENU } from "../constants";
import { useRouter } from "next/router";
import style from "../styles/Header.module.scss";
import Image from "next/image";
import logo from "../public/logo.png";
import Search from "./Search";

const Header = () => {
  const router = useRouter();
  return (
    <Grid
      container
      item
      xs={10}
      justifyContent="center"
      className={style.header}
    >
      <Grid item xs={2} padding={1} textAlign="start">
        <Image src={logo} alt="Logo" />
      </Grid>
      <Grid container item xs={7} padding={1} alignItems="center">
        <Grid item container xs alignContent="center">
          {MENU.map((item, index) => (
            <Grid item xs textAlign="center" key={index}>
              <Button
                onClick={() => router.push(item.href)}
                variant="text"
                color="inherit"
                className={style.button}
                fullWidth
              >
                <strong>{item.text}</strong>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container item xs={2} alignItems="center">
        <Grid item xs justifyContent="center">
          <a
            href={"tel:+79221775194"}
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Button
              color="inherit"
              className={style.button}
              startIcon={<Phone />}
              variant="text"
              fullWidth
            >
              <Typography fontSize="1.1vw">+7 (922) 177-51-94</Typography>
            </Button>
          </a>
        </Grid>
      </Grid>
      <Grid container item xs={1} alignItems="center">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Search />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
