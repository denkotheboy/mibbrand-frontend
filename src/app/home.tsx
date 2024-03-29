import React from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import Grid from "@mui/material/Grid";
import Products, { IProduct } from "components/Products";
import { api } from "api";
import { TITLE } from "constants/texts";
import { CATEGORIES, PRODUCTS } from "constants/api";
import Carousel from "components/Carousel";
import Categories, { ICategory } from "components/Categories";
import Head from "next/head";

interface IProps {
  products: IProduct[];
  error: string;
  categories: ICategory[] | null;
}

const Home: NextPage<IProps> = ({ products, error, categories }) => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Grid container item justifyContent="center">
        <Carousel />
      </Grid>
      <Grid container item justifyContent="center">
        {categories !== null ? <Categories list={categories} /> : null}
      </Grid>
      <Grid
        container
        item
        textAlign="center"
        justifyContent="center"
        paddingTop={4}
      >
        <h2>Товары</h2>
      </Grid>
      <Grid container item justifyContent="center">
        <Products products={products} errorResp={error} />
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  let categories = null;
  let error = "";
  let products: IProduct[] = [];
  try {
    const respProducts = await api.get<IProduct[]>(`${PRODUCTS}/0-8`);
    const respCategories = await api.get<ICategory[]>(CATEGORIES);

    if (respCategories.status === 200) {
      categories = respCategories.data;
    }
    if (respProducts.status === 200) {
      products = respProducts.data;
    } else {
      error = "Ошибка получения данных";
    }
  } catch (e) {
    error = "Сервер недоступен";
  }

  return {
    props: {
      products,
      categories,
      error,
    },
  };
}

export default Home;
