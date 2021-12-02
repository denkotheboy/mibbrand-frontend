import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export interface IProductCart {
  id: number;
  count: number;
}

interface CartState {
  list: IProductCart[];
}

const initialState: CartState = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartList: (state, action: PayloadAction<IProductCart>) => {
      state.list.push(action.payload);
    },
    updateCountCartList: (state, action: PayloadAction<IProductCart>) => {
      const elem = state.list.find((item) => item.id === action.payload.id);
      if (elem) elem.count = action.payload.count;
    },
    removeCartList: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    setCartList: (state, action: PayloadAction<IProductCart[]>) => {
      state.list = action.payload;
    },
  },
});

export const {
  addCartList: addCartList,
  removeCartList,
  setCartList,
  updateCountCartList,
} = cartSlice.actions;

export const CART_LIST = (state: RootState) => state.cart.list;

export default cartSlice.reducer;
