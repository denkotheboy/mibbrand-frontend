import { FC } from "react";
import LayoutOtherPage from "../../components/LayoutOtherPage";
import { PATH, PRODUCT, SERVER, TITLE } from "../../constants";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import Mobile from "../../components/ProductCard/Mobile";
import Head from "next/head";

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IImage {
  id: number;
  url: string;
  product: number;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  color: string;
  size: string;
  description: string;
  composition: string;
  categories: ICategory[];
  images: IImage[];
}

interface IProps {
  product?: IProduct;
  error: string;
}

const Product: FC<IProps> = ({ product, error = "" }) => {
  return (
    <Layout>
      <Head>
        <title>
          {product ? product.name : error} - {TITLE}
        </title>
      </Head>

      <LayoutOtherPage
        title={product ? product.name : error}
        breadCrumbs={[
          { color: "#000000", text: "Главная", href: PATH.HOME, hover: "#000" },
          {
            color: "green",
            text: product
              ? product.categories.length > 0
                ? product.categories[0].name
                : product.name
              : "404",
            href: PATH.HOME,
            hover: "green",
          },
        ]}
      >
        {product ? (
          <>
            <Grid
              container
              item
              xs={12}
              sx={{ display: { sm: "flex", xs: "none" } }}
              justifyContent="center"
            >
              <ProductCard product={product} />
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              sx={{ display: { sm: "none", xs: "flex" } }}
            >
              <Mobile product={product} />
            </Grid>
          </>
        ) : (
          <Grid container item xs={12} justifyContent="center">
            {error}
          </Grid>
        )}
      </LayoutOtherPage>
    </Layout>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  const resp = await axios.get<IProduct>(`${SERVER}${PRODUCT}?id=${params.id}`);
  if (resp.status === 200) {
    return {
      props: {
        product: resp.data,
      },
    };
  }
  return {
    props: {
      error: "Товар не найден",
    },
  };
}

export default Product;
