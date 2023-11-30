import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { IProduct } from "app/product/[id]";
import ImagesMobile from "components/ProductCard/ImagesMobile";
import Info from "components/ProductCard/Info";
import Description from "components/ProductCard/Description";

interface IProps {
  product: IProduct;
}

const Mobile: FC<IProps> = ({ product }) => {
  return (
    <>
      <Grid container item xs={12}>
        <ImagesMobile images={product.images} />
      </Grid>
      <Grid container item xs={12} paddingTop={5}>
        <Info product={product} />
        {product.description ? (
          <Description description={product.description} />
        ) : null}
      </Grid>
    </>
  );
};

export default Mobile;
