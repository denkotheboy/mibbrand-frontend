import React, { FC } from "react";
import classes from "styles/Products.module.scss";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Icon from "components/Cart/Icon";
import { useRouter } from "next/navigation";
import { IProduct } from "components/Products/index";
import noPhoto from "../../public/no-photo.png";
import { SERVER } from "constants/api";

const Product: FC<IProduct> = ({ id, images, name, price }) => {
  const router = useRouter();
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      className={classes.productList__product}
      onClick={() => router.push(`/product/${id}`)}
    >
      <Grid item xs={12}>
        <Image
          src={images.length > 0 ? SERVER + images[0].url : noPhoto}
          alt={name}
          height={100}
          width={100}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={10} paddingLeft={2} paddingTop={1}>
          {name}
          <br />
          <span className={classes.productList__product__price}>
            {price} руб.
          </span>
        </Grid>
        <Grid item xs={2} textAlign="right">
          <Icon id={id} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Product;
