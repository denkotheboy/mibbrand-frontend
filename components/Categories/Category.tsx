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
    <Grid
      item
      className={classes.category__card}
      onClick={() => router.push(`${PATH.CATEGORY}/${id}`)}
    >
      <Grid item xs={12}>
        <Image
          src={image}
          alt={name}
          height={100}
          width={100}
          className={classes.category__card__image}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} paddingTop={1}>
          {name}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Category;
