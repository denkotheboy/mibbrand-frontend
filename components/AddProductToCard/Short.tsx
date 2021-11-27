import React, { FC, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { addBasketList, BASKET_LIST } from "../../store/reducers/basket";
import { shallowEqual } from "react-redux";
import { IconButton, Tooltip } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoneIcon from "@mui/icons-material/Done";
import classes from "../../styles/Short.module.scss";

interface IProps {
  id: number;
}

const Short: FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const basketList = useAppSelector(BASKET_LIST, shallowEqual);

  const includeProduct = useMemo(() => {
    const productInBasket = basketList.find((item) => item.id === id);
    return !!productInBasket;
  }, [basketList, id]);

  const onClickHandler = useCallback(
    (e) => {
      e.stopPropagation();
      if (!includeProduct) {
        dispatch(addBasketList({ id, count: 1 }));
      }
    },
    [dispatch, id, includeProduct]
  );

  return (
    <Tooltip
      title={includeProduct ? "Посмотреть в корзине" : "Добавить в корзину"}
    >
      <IconButton
        className={
          includeProduct
            ? classes.short__buttonIcon__success
            : classes.short__buttonIcon__add
        }
        size="large"
        color={includeProduct ? "success" : "inherit"}
        onClick={onClickHandler}
      >
        {includeProduct ? <DoneIcon /> : <AddShoppingCartIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default Short;
