import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Images from "components/ProductCard/images";
import { IProduct } from "app/product/[id]";
import Info from "components/ProductCard/Info";
import Description from "components/ProductCard/Description";

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
        {product.description ? (
          <Description description={product.description} />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default ProductCard;
