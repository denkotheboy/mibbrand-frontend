import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { Category, IProduct } from "app/product/[id]";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import ButtonCart from "components/Cart/Button";

interface IProps {
  product: IProduct;
}

const Info: FC<IProps> = ({ product }) => {
  return (
    <Grid item xs={12} textAlign="start" padding={1}>
      Цена:{" "}
      <Typography
        component="span"
        color="green"
        sx={{ fontSize: { xs: "5vw", sm: "3.5vw", md: "1.6vw" } }}
      >
        {product.price} руб.
      </Typography>
      <Divider variant="middle" sx={{ margin: 2 }} />
      <ButtonCart id={product.id} />
      <Divider variant="middle" sx={{ margin: 2 }} />
      {product.categories.length > 0 ? (
        <>
          Категория:{" "}
          {product.categories.map((categories: Category, i) => (
            <Link href={`/category/${categories.category.id}`} passHref key={i}>
              <Chip
                label={categories.category.name}
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
          Цвет: <span style={{ whiteSpace: "pre-wrap" }}>{product.color}</span>
          <Divider variant="middle" sx={{ margin: 2 }} />
        </>
      ) : null}
      {product.composition ? (
        <>
          Состав:{" "}
          <span style={{ color: "green", whiteSpace: "pre-wrap" }}>
            {product.composition}
          </span>
          <Divider variant="middle" sx={{ margin: 2 }} />
        </>
      ) : null}
      {product.size ? (
        <>
          Размеры:{" "}
          <span style={{ color: "green", whiteSpace: "pre-wrap" }}>
            {product.size}
          </span>
          <Divider variant="middle" sx={{ margin: 2 }} />
        </>
      ) : null}
    </Grid>
  );
};

export default Info;
