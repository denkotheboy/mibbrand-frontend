import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { api } from "../../api";
import { PRODUCTS } from "../../constants";
import Icon from "../Cart/Icon";
import Image from "next/image";
import classes from "../../styles/Products.module.scss";
import Product from "./Product";

export interface IProductShort {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface IProps {
  products: IProductShort[];
  errorResp: string;
  loadMore?: boolean;
}

const Products = ({
  products = [],
  errorResp = "",
  loadMore = true,
}: IProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(errorResp);
  const [list, setList] = useState<IProductShort[]>(products);

  const fetch = useCallback(async () => {
    await api
      .get<IProductShort[]>(`${PRODUCTS}?from=${products.length}&limit=8`)
      .then((resp) => {
        if (resp.status === 200) {
          setList((prev) => [...prev, ...resp.data]);
        } else {
          setError(JSON.stringify(resp.data, null, 4));
        }
      });
  }, [products.length]);

  return (
    <Grid container item xs={10} padding={2} paddingTop={5}>
      <Grid item xs={12} textAlign="center">
        <h3>Товары</h3>
      </Grid>
      <Grid container item xs={12} justifyContent="center" textAlign="center">
        {loading && list.length === 0 && <CircularProgress />}
        {error && <span style={{ color: "red" }}>{error}</span>}
        {list.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
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
