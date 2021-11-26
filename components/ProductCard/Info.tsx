import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ICategory, IProduct } from "../../pages/product/[id]";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Chip from "@mui/material/Chip";
import ColorLensIcon from "@mui/icons-material/ColorLens";

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
      <Button
        variant="contained"
        color="success"
        size="large"
        startIcon={<ShoppingCartIcon />}
      >
        Купить сейчас
      </Button>
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
