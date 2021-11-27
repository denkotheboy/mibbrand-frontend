import React from "react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import Products, { IProductShort } from "../components/Products";
import { api } from "../api";
import { PRODUCTS, TITLE } from "../constants";
import Carousel from "../components/Carousel";

interface IProps {
  products: IProductShort[];
  error: string;
}

const Home: NextPage<IProps> = ({ products, error }) => {
  return (
    <Layout>
      <title>{TITLE}</title>
      <Grid container item justifyContent="center">
        <Carousel />
      </Grid>
      <Grid container item justifyContent="center">
        <Products products={products} errorResp={error} />
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const resp = await api.get<IProductShort[]>(`${PRODUCTS}?from=0&limit=8`);
  if (resp.status === 200) {
    return {
      props: {
        products: resp.data,
      },
    };
  }
  return {
    props: {
      error: resp.data,
    },
  };
}

export default Home;
