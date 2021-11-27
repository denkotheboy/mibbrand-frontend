import React, { FC, useMemo, useState } from "react";
import { IconButton, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  addBasketList,
  BASKET_LIST,
  removeBasketList,
} from "../../store/reducers/basket";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { shallowEqual } from "react-redux";
import Divider from "@mui/material/Divider";

interface IProps {
  id: number;
}

const AddProductToCard: FC<IProps> = ({ id }) => {
  const [count, setCount] = useState<number>(1);
  const dispatch = useAppDispatch();
  const basketList = useAppSelector(BASKET_LIST, shallowEqual);

  const includeProduct = useMemo(() => {
    const productInBasket = basketList.find((item) => item.id === id);
    return !!productInBasket;
  }, [basketList, id]);

  return (
    <>
      <Stack direction="row">
        <IconButton
          disabled={includeProduct}
          size="small"
          onClick={() => setCount((prev) => (prev - 1 < 1 ? prev : --prev))}
        >
          <RemoveIcon />
        </IconButton>
        <TextField
          disabled={includeProduct}
          size="small"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          sx={{ width: 100 }}
          value={count}
          onChange={(e) =>
            setCount(Number(e.target.value) > 0 ? Number(e.target.value) : 1)
          }
        />
        <IconButton
          disabled={includeProduct}
          size="small"
          onClick={() => setCount((prev) => ++prev)}
        >
          <AddIcon />
        </IconButton>
      </Stack>
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
            ? () => dispatch(removeBasketList(id))
            : () => dispatch(addBasketList({ id, count }))
        }
      >
        {includeProduct ? "Удалить из корзины" : "Добавить в корзину"}
      </Button>
    </>
  );
};

export default AddProductToCard;
