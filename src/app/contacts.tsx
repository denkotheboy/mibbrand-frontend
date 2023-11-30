import React from "react";
import { PATH, TITLE } from "constants";
import LayoutOtherPage from "components/LayoutOtherPage";
import Grid from "@mui/material/Grid";
import Layout from "components/Layout";
import Head from "next/head";
import PhoneIcon from "@mui/icons-material/Phone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon, ListSubheader } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const Contacts = () => {
  return (
    <Layout>
      <Head>
        <title>Контакты - {TITLE}</title>
      </Head>
      <LayoutOtherPage
        title="Контакты"
        breadCrumbs={[
          { color: "#000000", text: "Главная", href: PATH.HOME, hover: "#000" },
          {
            color: "green",
            text: "Контакты",
            href: PATH.CONTACTS,
            hover: "green",
          },
        ]}
      >
        <Grid container xs={12} item justifyContent="center">
          <Grid item xs={11} sm={6} md={5} lg={4}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a268a5e518374dd94c53a5628c589f227efab454cf63f5bfa8190cb2c3d03ea&amp;source=constructor"
              width="100%"
              height="507"
              frameBorder="0"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={5}
            lg={4}
            justifyContent="center"
          >
            <List
              sx={{
                width: { xs: "100%", lg: "80%" },
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <a
                  href="tel:+79221110884"
                  style={{
                    color: "#000",
                    textDecorationLine: "none",
                  }}
                >
                  <ListItemText primary="+7 (922) 111-0884 (Мастерская)" />
                </a>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="г. Екатеринбург, пос. Широкая речка, ул. Перевальная, 67" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </LayoutOtherPage>
    </Layout>
  );
};

export default Contacts;
