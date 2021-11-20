import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { IProduct } from "../../pages/product/[id]";
import ImagesMobile from "./ImagesMobile";
import Info from "./Info";
import Description from "./Description";

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
        <Description description={product.description} />
      </Grid>
    </>
  );
};

export default Mobile;
