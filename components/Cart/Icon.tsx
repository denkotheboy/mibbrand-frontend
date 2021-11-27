import React, { FC, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { addCartList, CART_LIST } from "../../store/reducers/cart";
import { shallowEqual } from "react-redux";
import { IconButton, Tooltip } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoneIcon from "@mui/icons-material/Done";
import classes from "../../styles/Short.module.scss";
import { useRouter } from "next/router";
import { PATH } from "../../constants";

interface IProps {
  id: number;
}

const Icon: FC<IProps> = ({ id }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const basketList = useAppSelector(CART_LIST, shallowEqual);

  const includeProduct = useMemo(() => {
    const productInBasket = basketList.find((item) => item.id === id);
    return !!productInBasket;
  }, [basketList, id]);

  const onClickHandler = useCallback(
    (e) => {
      e.stopPropagation();
      if (!includeProduct) {
        dispatch(addCartList({ id, count: 1 }));
      } else {
        router.push(PATH.CART);
      }
    },
    [dispatch, id, includeProduct, router]
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

export default Icon;
