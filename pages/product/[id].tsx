import { FC } from "react";
import LayoutOtherPage from "../../components/LayoutOtherPage";
import { PATH, PRODUCT, SERVER } from "../../constants";
import axios from "axios";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";
import Link from "next/link";

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
        <Grid container item xs={12} justifyContent="center">
          <Grid container item xs={10}>
            <Grid container item xs={8} padding={1}>
              {product.images.map((image: IImage, index: number) => (
                <img
                  key={index}
                  style={{ width: "48%", margin: 5 }}
                  src={image.url}
                  srcSet={image.url}
                  alt=""
                  loading="lazy"
                />
              ))}
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12} textAlign="start" padding={1}>
                Цена:
                <Typography color="green" fontSize="1.6vw">
                  {product.price} руб.
                </Typography>
                <hr />
                <Button variant="contained" color="success" size="large">
                  Купить сейчас
                </Button>
                <hr />
                {product.categories.length > 0 ? (
                  <>
                    Категория:{" "}
                    <Typography color="green">
                      {product.categories.map((categories: ICategory, i) => (
                        <Link
                          href={`/category/${categories.type}`}
                          passHref
                          key={i}
                        >
                          {categories.name}
                        </Link>
                      ))}
                    </Typography>
                  </>
                ) : null}
                {product.color ? (
                  <>
                    Цвет: <Typography color="green">{product.color}</Typography>
                  </>
                ) : null}
                {product.composition ? (
                  <>
                    Состав:{" "}
                    <Typography color="green">{product.composition}</Typography>
                  </>
                ) : null}
                {product.size ? (
                  <>
                    Размеры:
                    <Typography color="green">{product.size}</Typography>{" "}
                  </>
                ) : null}
                <hr />
              </Grid>
              <Grid item xs={12} padding={1} textAlign="start">
                <Typography color="green" fontSize="1.6vw">
                  Описание
                </Typography>
                <hr />
                <Typography
                  sx={{
                    fontSize: 15,
                    color: "#333",
                    lineHeight: 1.5,
                    width: "80%",
                  }}
                >
                  {product.description}
                </Typography>
                <hr />
              </Grid>
            </Grid>
          </Grid>
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
