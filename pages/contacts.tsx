import React from "react";
import { PATH, TITLE } from "../constants";
import LayoutOtherPage from "../components/LayoutOtherPage";
import Grid from "@mui/material/Grid";
import Layout from "../components/Layout";
import Head from "next/head";

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
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3ed3f42d80ba531bf149cf028b5c9f83d5bc649e5e62c4146c3ecaa75c4a4fbc&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          />
          г. Екатеринбург, пос. Широкая речка, ул. Перевальная, 67 <br />
          Телефон: +7 (922) 111-0884 (Мастерская)
        </Grid>
      </LayoutOtherPage>
    </Layout>
  );
};

export default Contacts;
