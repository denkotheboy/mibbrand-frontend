import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { ICategory, IProduct } from "../../pages/product/[id]";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import AddProductToCard from "../AddProductToCard";

interface IProps {
  product: IProduct;
}

const Info: FC<IProps> = ({ product }) => {
  return (
    <Grid item xs={12} textAlign="start" padding={1}>
      Цена:
      <Typography
        component="span"
        color="green"
        sx={{ fontSize: { xs: "5vw", sm: "3.5vw", md: "1.6vw" } }}
      >
        {product.price} руб.
      </Typography>
      <Divider variant="middle" sx={{ margin: 2 }} />
      <AddProductToCard id={product.id} />
      <Divider variant="middle" sx={{ margin: 2 }} />
      {product.categories.length > 0 ? (
        <>
          Категория:{" "}
          {product.categories.map((categories: ICategory, i) => (
            <Link href={`/category/${categories.type}`} passHref key={i}>
              <Chip
                label={categories.name}
                variant="outlined"
                color="success"
                size="small"
              />
            </Link>
          ))}
          <Divider variant="middle" sx={{ margin: 2 }} />
        </>
      ) : null}
      {product.color ? (
        <>
          Цвет: <span style={{ color: "green" }}>{product.color}</span>
          <Divider variant="middle" sx={{ margin: 2 }} />
        </>
      ) : null}
      {product.composition ? (
        <>
          Состав: <span style={{ color: "green" }}>{product.composition}</span>
          <Divider variant="middle" sx={{ margin: 2 }} />
        </>
      ) : null}
      {product.size ? (
        <>
          Размеры: <span style={{ color: "green" }}>{product.size}</span>
          <Divider variant="middle" sx={{ margin: 2 }} />
        </>
      ) : null}
    </Grid>
  );
};

export default Info;
