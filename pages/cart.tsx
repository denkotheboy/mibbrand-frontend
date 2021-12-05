import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { NextPage } from "next";
import { CART, PATH, TITLE } from "../constants";
import Grid from "@mui/material/Grid";
import Layout from "../components/Layout";
import LayoutOtherPage from "../components/LayoutOtherPage";
import { api } from "../api";
import { IProductShort } from "../components/Products";
import { CircularProgress } from "@mui/material";
import Table from "../components/Cart/Table";
import { useAppSelector } from "../hooks/store.hooks";
import { CART_LIST } from "../store/reducers/cart";
import { shallowEqual } from "react-redux";
import OrderForm from "../components/OrderForm";
import NotFound from "../components/Cart/NotFound";

const Cart: NextPage = () => {
  const listToCart = useAppSelector(CART_LIST, shallowEqual);
  const [products, setProducts] = useState<IProductShort[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const flag = useRef<boolean>(false);

  const fetch = useCallback(async (list: number[]) => {
    setLoading(true);
    await api
      .post<{ products: IProductShort[] }>(CART, { list })
      .then((resp) => {
        if (resp.status === 200) {
          setError("");
          setProducts(resp.data.products);
        } else {
          setProducts([]);
          setError("");
        }
      })
      .catch((e) => {
        setError(JSON.stringify(e));
        setProducts([]);
      });
    setLoading(false);
  }, []);

  const list = useMemo(() => {
    if (listToCart.length > 0 && products.length > 0) {
      return products.map((product) => ({
        ...product,
        count: listToCart.find((item) => item.id === product.id)?.count || 0,
      }));
    }
    return [];
  }, [listToCart, products]);

  useEffect(() => {
    if (listToCart.length > 0 && !flag.current) {
      fetch(listToCart.map((item) => item.id));
      flag.current = true;
    }
  }, [fetch, listToCart]);

  return (
    <Layout>
      <title>{TITLE} - Корзина</title>
      <LayoutOtherPage
        title="Корзина"
        breadCrumbs={[
          { color: "#000000", text: "Главная", href: PATH.HOME, hover: "#000" },
          {
            color: "green",
            text: "Корзина",
            href: PATH.HOME,
            hover: "green",
          },
        ]}
      >
        <Grid container xs={12} item justifyContent="center">
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={10}
            justifyContent="center"
          >
            {error}
            {list.length > 0 ? <Table list={list} /> : <NotFound />}
            {loading ? <CircularProgress /> : null}
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={10}
            justifyContent="center"
            padding={5}
          >
            {list.length > 0 ? (
              <OrderForm setError={(value) => setError(value)} />
            ) : null}
          </Grid>
        </Grid>
      </LayoutOtherPage>
    </Layout>
  );
};

export default Cart;
