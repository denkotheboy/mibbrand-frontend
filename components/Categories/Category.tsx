import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import React, { FC } from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import classes from "../../styles/Category.module.scss";
import { useRouter } from "next/router";
import { PATH } from "../../constants";

interface IProps {
  image: string;
  name: string;
  id: number;
}

const Category: FC<IProps> = ({ image, name, id }) => {
  const router = useRouter();
  return (
    <Card
      className={classes.category__card}
      onClick={() => router.push(`${PATH.CATEGORY}/${id}`)}
    >
      <Box component="div" className={classes.category__card__boxImage}>
        <Image
          src={image}
          height={100}
          width={100}
          layout="responsive"
          objectFit="cover"
          alt={name}
        />
      </Box>
      <Box className={classes.category__card__boxContent}>
        <Grid container item xs={12} alignItems="center" height="100%">
          <Grid item xs={12} className={classes.category__card__text}>
            {name}
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Category;
