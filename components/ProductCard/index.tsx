import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Images from "./images";
import { IProduct } from "../../pages/product/[id]";
import Info from "./Info";
import Description from "./Description";

interface IProps {
  product: IProduct;
}

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <Grid container item xs={12} lg={10}>
      <Grid container item xs={8} padding={1}>
        <Images images={product.images} />
      </Grid>
      <Grid item xs={4}>
        <Info product={product} />
        <Description description={product.description} />
      </Grid>
    </Grid>
  );
};

export default ProductCard;
