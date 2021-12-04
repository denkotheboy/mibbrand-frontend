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
      <Grid item xs={1} height="100%" overflow="auto">
        {images.map((image) => (
          <>
            <Grid
              item
              xs={12}
              key={image.id}
              onClick={() => setCurrentImage({ id: image.id, url: image.url })}
              padding={1}
              className={
                classes.productCard__images +
                " " +
                (currentImage.id === image.id
                  ? classes.productCard__imagesBorder
                  : null)
              }
            >
              <Grid item className={classes.productCard__container}>
                <Image
                  src={image.url}
                  alt=""
                  height={100}
                  width={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </Grid>
            </Grid>
          </>
        ))}
      </Grid>
      <Grid container item xs={11} padding={1}>
        <Grid item xs={12} style={{ position: "relative" }}>
          <Image
            src={currentImage.url}
            alt=""
            height={100}
            width={100}
            layout="responsive"
            objectFit="cover"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Images;
