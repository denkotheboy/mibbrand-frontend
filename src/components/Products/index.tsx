import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import React, { useCallback, useState } from "react";
import { api } from "api";
import Product from "components/Products/Product";
import { PRODUCTS } from "constants/api";

interface Image {
  url: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  images: Image[];
}

interface IProps {
  products: IProduct[];
  errorResp: string;
  loadMore?: boolean;
}

const Products = ({
  products = [],
  errorResp = "",
  loadMore = true,
}: IProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(errorResp);
  const [list, setList] = useState<IProduct[]>(products);

  const fetch = useCallback(async () => {
    await api.get<IProduct[]>(`${PRODUCTS}/${list.length}-8`).then((resp) => {
      if (resp.status === 200) {
        setList((prev) => [...prev, ...resp.data]);
      } else {
        setError(JSON.stringify(resp.data, null, 4));
      }
    });
  }, [list.length]);

  return (
    <Grid container item xs={12} md={10} padding={2}>
      <Grid container item xs={12} justifyContent="center" textAlign="center">
        {loading && list.length === 0 && <CircularProgress />}
        {error && <span style={{ color: "red" }}>{error}</span>}
        {list.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        paddingTop={4}
        justifyContent="center"
        textAlign="center"
      >
        {loadMore ? (
          <Button variant="contained" color="success" onClick={() => fetch()}>
            {loading ? <>Загрузка...</> : <>Загрузить ещё</>}
          </Button>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Products;
