import { Grid, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { PATH } from "../constants";
import LayoutOtherPage from "../components/LayoutOtherPage";
import Layout from "../components/Layout";

const PageNotFound = () => (
  <Layout>
    <LayoutOtherPage
      title="Страница не найдена"
      breadCrumbs={[
        { color: "#000000", text: "Главная", href: PATH.HOME, hover: "#000" },
        { color: "green", text: "404", href: "", hover: "green" },
      ]}
    >
      <Grid item xs textAlign="center">
        <Typography fontSize={180} fontWeight="bold">
          404
        </Typography>
        <h3>Страницы, которую вы ищете, не существует</h3>
        <h5>
          Пожалуйста вернитесь на{" "}
          <Link href={PATH.HOME}>
            <a>
              <Typography component="span" sx={{ color: "green" }}>
                главную
              </Typography>
            </a>
          </Link>{" "}
          страницу
        </h5>
      </Grid>
    </LayoutOtherPage>
  </Layout>
);

export default PageNotFound;
