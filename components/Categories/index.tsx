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
      xs={10}
      padding={2}
      paddingTop={5}
      justifyContent="center"
      textAlign="center"
    >
      <Grid item xs={12} textAlign="center">
        <h3>Категории</h3>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        {list.map((item) => (
          <Grid key={item.id} item xs={12} sm={4} md={4} lg={3} padding={1}>
            <Category image={item.image} name={item.name} id={item.id} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Categories;
