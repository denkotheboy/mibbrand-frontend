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
      <Grid item sm={2} md={1} height="100%" overflow="auto">
        {images.map((image) => (
          <React.Fragment key={image.id}>
            <Grid
              item
              xs={12}
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
          </React.Fragment>
        ))}
      </Grid>
      <Grid container item sm={10} md={11} padding={1}>
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
