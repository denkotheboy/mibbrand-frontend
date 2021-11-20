import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ICategory, IProduct } from "../../pages/product/[id]";
import Link from "next/link";
import Grid from "@mui/material/Grid";

interface IProps {
  product: IProduct;
}

const Info: FC<IProps> = ({ product }) => {
  return (
    <Grid item xs={12} textAlign="start" padding={1}>
      Цена:
      <Typography
        color="green"
        sx={{ fontSize: { xs: "5vw", sm: "3.5vw", md: "1.6vw" } }}
      >
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
              <Link href={`/category/${categories.type}`} passHref key={i}>
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
          Состав: <Typography color="green">{product.composition}</Typography>
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
  );
};

export default Info;
