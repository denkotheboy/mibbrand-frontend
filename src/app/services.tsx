import React from "react";
import { PATH } from "constants/path";
import { TITLE } from "constants/texts";
import LayoutOtherPage from "components/LayoutOtherPage";
import Grid from "@mui/material/Grid";
import Layout from "components/Layout";
import Head from "next/head";

const Services = () => {
  return (
    <Layout>
      <Head>
        <title>Услуги - {TITLE}</title>
      </Head>
      <LayoutOtherPage
        title="Услуги"
        breadCrumbs={[
          { color: "#000000", text: "Главная", href: PATH.HOME, hover: "#000" },
          {
            color: "green",
            text: "Услуги",
            href: PATH.SERVICES,
            hover: "green",
          },
        ]}
      >
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={11} md={7} textAlign="left" marginBottom={5}>
            1
          </Grid>
        </Grid>
      </LayoutOtherPage>
    </Layout>
  );
};

export default Services;
