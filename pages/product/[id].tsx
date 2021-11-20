import { FC } from "react";
import LayoutOtherPage from "../../components/LayoutOtherPage";
import { PATH, PRODUCT, SERVER } from "../../constants";
import axios from "axios";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";
import Link from "next/link";
import Images from "../../components/ProductCard/images";
import ProductCard from "../../components/ProductCard";
import { Box } from "@mui/material";
import ImagesMobile from "../../components/ProductCard/ImagesMobile";
import Mobile from "../../components/ProductCard/Mobile";

export interface ICategory {
  id: number;
  name: string;
  product: number;
  type: number;
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
  product: IProduct;
}

const Product: FC<IProps> = ({ product }) => {
  return (
    <Layout>
      <LayoutOtherPage
        title={product.name}
        breadCrumbs={[
          { color: "#000000", text: "Главная", href: PATH.HOME, hover: "#000" },
          {
            color: "green",
            text:
              product.categories.length > 0
                ? product.categories[0].name
                : product.name,
            href: PATH.HOME,
            hover: "green",
          },
        ]}
      >
        <Grid
          container
          item
          xs={12}
          sx={{ display: { md: "flex", xs: "none" } }}
          justifyContent="center"
        >
          <ProductCard product={product} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          sx={{ display: { md: "none", xs: "flex" } }}
        >
          <Mobile product={product} />
        </Grid>
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
      product: null,
      error: resp.data,
    },
  };
}

export default Product;
