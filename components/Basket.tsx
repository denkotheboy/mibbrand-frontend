import React from "react";
import { Badge, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../hooks/store.hooks";
import { BASKET_LIST } from "../store/reducers/basket";
import { shallowEqual } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 5,
  },
}));

const Basket = () => {
  const list = useAppSelector(BASKET_LIST, shallowEqual);
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={list.length} color="success">
        <ShoppingCartIcon fontSize="large" />
      </StyledBadge>
    </IconButton>
  );
};

export default Basket;
