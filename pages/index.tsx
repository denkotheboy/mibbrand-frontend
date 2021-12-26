import React from "react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import Products, { IProductShort } from "../components/Products";
import { api } from "../api";
import { CATEGORIES, PRODUCTS, TITLE } from "../constants";
import Carousel from "../components/Carousel";
import Categories, { ICategory } from "../components/Categories";
import { Divider } from "@mui/material";

interface IProps {
  products: IProductShort[];
  error: string;
  categories: ICategory[] | null;
}

const Home: NextPage<IProps> = ({ products, error, categories }) => {
  return (
    <Layout>
      <title>{TITLE}</title>
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
        <h3>Товары</h3>
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
  let products: IProductShort[] = [];
  try {
    const respProducts = await api.get<IProductShort[]>(
      `${PRODUCTS}?from=0&limit=8`
    );
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
