import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export interface IProductBasket {
  id: number;
  count: number;
}

interface CounterState {
  list: IProductBasket[];
}

const initialState: CounterState = {
  list: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasketList: (state, action: PayloadAction<IProductBasket>) => {
      state.list.push(action.payload);
    },
    removeBasketList: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBasketList, removeBasketList } = basketSlice.actions;

export const BASKET_LIST = (state: RootState) => state.basket.list;

export default basketSlice.reducer;
