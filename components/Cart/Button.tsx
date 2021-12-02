import React, { FC, useMemo, useState } from "react";
import { IconButton, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  addCartList,
  CART_LIST,
  removeCartList,
} from "../../store/reducers/cart";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { shallowEqual } from "react-redux";
import Divider from "@mui/material/Divider";
import InputCount from "../InputCount";

interface IProps {
  id: number;
}

const ButtonCart: FC<IProps> = ({ id }) => {
  const [count, setCount] = useState<number>(1);
  const dispatch = useAppDispatch();
  const cartList = useAppSelector(CART_LIST, shallowEqual);

  const includeProduct = useMemo(() => {
    const productInBasket = cartList.find((item) => item.id === id);
    return !!productInBasket;
  }, [cartList, id]);

  return (
    <>
      <InputCount
        includeProduct={includeProduct}
        setCount={setCount}
        count={count}
      />
      <Divider variant="middle" sx={{ margin: 2 }} />
      <Button
        disableRipple
        variant="contained"
        color={includeProduct ? "error" : "success"}
        startIcon={
          includeProduct ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />
        }
        onClick={
          includeProduct
            ? () => dispatch(removeCartList(id))
            : () => dispatch(addCartList({ id, count }))
        }
      >
        {includeProduct ? "Удалить из корзины" : "Добавить в корзину"}
      </Button>
    </>
  );
};

export default ButtonCart;
