import React from "react";
import Layout from "../../components/Layout";
import Grid from "@mui/material/Grid";
import Products, { IProductShort } from "../../components/Products";
import { CATEGORY, PATH, SERVER, TITLE } from "../../constants";
import { NextPage } from "next";
import LayoutOtherPage from "../../components/LayoutOtherPage";
import { api } from "../../api";
import Head from "next/head";

interface IProps {
  products: IProductShort[];
  error: string;
  category: string;
}

const Category: NextPage<IProps> = ({ products, error, category }) => {
  return (
    <Layout>
      <Head>
        <title>
          {TITLE} - {category || ""}
        </title>
      </Head>
      <LayoutOtherPage
        title={category}
        breadCrumbs={[
          { color: "#000000", text: "Главная", href: PATH.HOME, hover: "#000" },
          {
            color: "green",
            text: category,
            href: PATH.HOME,
            hover: "green",
          },
        ]}
      >
        <Grid container justifyContent="center">
          <Products products={products} errorResp={error} loadMore={false} />
        </Grid>
      </LayoutOtherPage>
    </Layout>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  const resp = await api.get<{ products: IProductShort[]; category: string }>(
    `${SERVER}${CATEGORY}?id=${params.id}`
  );
  if (resp.status === 200) {
    return {
      props: {
        products: resp.data.products,
        category: resp.data.category,
      },
    };
  }
  return {
    props: {
      products: null,
      error: resp.data,
      category: null,
    },
  };
}

export default Category;
