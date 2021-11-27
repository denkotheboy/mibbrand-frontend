import React, { useEffect } from "react";
import { Badge, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import {
  CART_LIST,
  IProductCart,
  setCartList,
} from "../../store/reducers/cart";
import { shallowEqual } from "react-redux";
import { useRouter } from "next/router";
import { PATH } from "../../constants";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 5,
  },
}));

const Cart = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const list = useAppSelector(CART_LIST, shallowEqual);

  useEffect(() => {
    const store: string | null = localStorage.getItem("cart");
    if (store !== null) {
      const listStore: IProductCart[] = JSON.parse(store);
      dispatch(setCartList(listStore));
    }
  }, [dispatch]);

  useEffect(() => {
    const store: string | null = localStorage.getItem("cart");
    if (list.length > 0) {
      localStorage.setItem("cart", JSON.stringify(list));
    } else if (store !== null) {
      localStorage.removeItem("cart");
    }
  }, [list]);

  return (
    <IconButton aria-label="cart" onClick={() => router.push(PATH.CART)}>
      <StyledBadge badgeContent={list.length} color="success">
        <ShoppingCartIcon fontSize="large" />
      </StyledBadge>
    </IconButton>
  );
};

export default Cart;
