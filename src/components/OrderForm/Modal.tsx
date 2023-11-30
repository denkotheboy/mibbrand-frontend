import Dialog from "@mui/material/Dialog";
import React, { FC, useCallback, useEffect } from "react";
import { useAppDispatch } from "../../hooks/store.hooks";
import { setCartList } from "../../store/reducers/cart";

interface IProps {
  text: string;
}

const Modal: FC<IProps> = ({ text }) => {
  const dispatch = useAppDispatch();

  const close = useCallback(() => {
    dispatch(setCartList([]));
  }, [dispatch]);

  useEffect(() => {
    setTimeout(close, 3000);
  }, [close]);

  return (
    <Dialog onClose={close} open={true}>
      <span style={{ color: "green", padding: 20 }}>{text}</span>
    </Dialog>
  );
};

export default Modal;
