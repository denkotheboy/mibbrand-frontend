import React, { FC, useState } from "react";
import { IImage } from "../../pages/product/[id]";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import classes from "../../styles/Images.module.scss";

interface IProps {
  images: IImage[];
}

const Images: FC<IProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<{ id: number; url: string }>(
    { id: images[0].id, url: images[0].url }
  );

  return (
    <Grid container item xs={12} padding={1} height="100%">
      <Grid item xs={2} height="100%" overflow="auto">
        {images.map((image) => (
          <>
            <Grid
              item
              xs={12}
              key={image.id}
              className={
                classes.productCard__images +
                " " +
                (currentImage.id === image.id
                  ? classes.productCard__imagesBorder
                  : null)
              }
            >
              <Image src={image.url} alt="" layout="fill" objectFit="contain" />
            </Grid>
          </>
        ))}
      </Grid>
      <Grid container item xs={10} padding={1}>
        <Grid container item xs={12} style={{ position: "relative" }}>
          <Image
            src={currentImage.url}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Images;
