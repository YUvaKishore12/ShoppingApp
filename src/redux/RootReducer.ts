import cartReducer from "./slices/cartSlice";
import favouriteSlice from "./slices/favouriteSlice";
import productDetailSlice from "./slices/productDetailSlice";
import ProductSlice from "./slices/productSlice";
import { combineReducers } from "redux";

export const RootReducers = combineReducers({
  products: ProductSlice,
  cart: cartReducer,
  favourite: favouriteSlice,
  productDetail: productDetailSlice,
});

export type RootState = ReturnType<typeof RootReducers>;
