import Box from "@mui/material/Box";
import React, { FC } from "react";
import SwipeableViews from "react-swipeable-views";
import { Image as IImage } from "../../pages/product/[id]";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { SERVER } from "../../constants";

interface IProps {
  images: IImage[];
}

const ImagesMobile: FC<IProps> = ({ images }) => {
  return (
    <Grid item xs={12}>
      <SwipeableViews enableMouseEvents>
        {images.map((image, index) => (
          <Grid item xs={12} key={index} style={{ position: "relative" }}>
            <Image
              src={SERVER + image.url}
              alt=""
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
            />
          </Grid>
        ))}
      </SwipeableViews>
    </Grid>
  );
};

export default ImagesMobile;
