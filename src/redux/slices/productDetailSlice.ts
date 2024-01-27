import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../RootReducer";

interface ProductState {
  isLoading: boolean;
  error: string | null;
  data: any;
}

export const fetchProductDetail = createAsyncThunk(
  "productDetail/fetchProductDetail",
  async (productId: string, { rejectWithValue }) => {
    try {
      console.log("in slice", productId);
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch productDetail");
    }
  }
);

const initialState: ProductState = {
  isLoading: false,
  error: null,
  data: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectProductDetail = (state: RootState) =>
  state.productDetail.data;
export const selectProductDetailLoading = (state: RootState) =>
  state.productDetail.isLoading;
export const selectProductDetailError = (state: RootState) =>
  state.productDetail.error;

export default productDetailSlice.reducer;
