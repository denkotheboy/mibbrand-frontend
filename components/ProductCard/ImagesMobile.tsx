import Box from "@mui/material/Box";
import React, { FC } from "react";
import SwipeableViews from "react-swipeable-views";
import { IImage } from "../../pages/product/[id]";

interface IProps {
  images: IImage[];
}

const ImagesMobile: FC<IProps> = ({ images }) => {
  return (
    <SwipeableViews enableMouseEvents>
      {images.map((image, index) => (
        <div key={index}>
          <Box
            component="img"
            sx={{
              overflow: "hidden",
              width: "100%",
            }}
            src={image.url}
          />
        </div>
      ))}
    </SwipeableViews>
  );
};

export default ImagesMobile;
