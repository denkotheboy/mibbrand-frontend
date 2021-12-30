import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Category from "./Category";

export interface ICategory {
  id: number;
  image: string;
  name: string;
}

interface IProps {
  list: ICategory[];
}

const Categories: FC<IProps> = ({ list = [] }) => {
  return (
    <Grid
      container
      item
      xs={12}
      md={10}
      padding={2}
      paddingTop={5}
      justifyContent="center"
      textAlign="center"
    >
      <Grid item xs={12} textAlign="center">
        <h2>Категории</h2>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        {list.map((item) => (
          <Grid key={item.id} item xs={4} sm={4} md={3} lg={2} padding={1}>
            <Category image={item.image} name={item.name} id={item.id} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Categories;
