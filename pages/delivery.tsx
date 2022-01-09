import React from "react";
import { PATH, TITLE } from "../constants";
import LayoutOtherPage from "../components/LayoutOtherPage";
import Grid from "@mui/material/Grid";
import Layout from "../components/Layout";
import Head from "next/head";
import { Paper } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Delivery = () => {
  return (
    <Layout>
      <Head>
        <title>Доставка - {TITLE}</title>
      </Head>
      <LayoutOtherPage
        title="Доставка"
        breadCrumbs={[
          { color: "#000000", text: "Главная", href: PATH.HOME, hover: "#000" },
          {
            color: "green",
            text: "Доставка",
            href: PATH.DELIVERY,
            hover: "green",
          },
        ]}
      >
        <Grid container item xs={12} justifyContent="center">
          <Grid component={Paper} elevation={3} container item xs={6}>
            1
          </Grid>
        </Grid>
      </LayoutOtherPage>
    </Layout>
  );
};

export default Delivery;
