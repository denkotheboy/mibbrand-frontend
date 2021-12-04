import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { api } from "../api";
import { PRODUCTS } from "../constants";
import Icon from "./Cart/Icon";
import Image from "next/image";
import classes from "../styles/Products.module.scss";

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
    <>
      <Grid
        container
        item
        xs={10}
        padding={2}
        paddingTop={5}
        justifyContent="center"
        textAlign="center"
      >
        {loading && list.length === 0 && <CircularProgress />}
        {error && <span style={{ color: "red" }}>{error}</span>}
        {list.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.productList__product}
            onClick={() => router.push(`/product/${product.id}`)}
          >
            <Grid item xs={12}>
              <Image
                src={product.image}
                alt={product.name}
                height={100}
                width={100}
                layout="responsive"
                objectFit="cover"
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={10} paddingLeft={2}>
                {product.name}
                <br />
                <span className={classes.productList__product__price}>
                  {product.price}руб.
                </span>
              </Grid>
              <Grid item xs={2} textAlign="right">
                <Icon id={product.id} />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={10} padding={2} textAlign="center">
        {loadMore ? (
          <Button variant="contained" color="success" onClick={() => fetch()}>
            {loading ? <>Загрузка...</> : <>Загрузить ещё</>}
          </Button>
        ) : null}
      </Grid>
    </>
  );
};

export default Products;
