import React from "react";
import { Button, Grid } from "@mui/material";
import { PATH } from "../../constants";
import { useRouter } from "next/router";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const NotFound = () => {
  const router = useRouter();
  return (
    <Grid container item xs={12} justifyContent="center">
      <Grid item xs={10}>
        <ProductionQuantityLimitsIcon fontSize="large" />
      </Grid>
      <Grid
        item
        xs={10}
        padding={3}
        sx={{ fontSize: { xs: "3vw", sm: "1.2vw" } }}
      >
        Корзина пуста
      </Grid>
      <Grid item xs={10} padding={3}>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={() => router.push(PATH.HOME)}
        >
          Перейти на главную
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
