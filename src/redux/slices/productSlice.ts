import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Import Axios
import { RootState } from "../RootReducer";

interface ProductsState {
  data: any[];
  isLoading: boolean;
  error: string | null;
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

const initialState: ProductsState = {
  data: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectProducts = (state: RootState) => state.products.data;
export const selectProductsLoading = (state: RootState) =>
  state.products.isLoading;
export const selectProductsError = (state: RootState) => state.products.error;

export default productsSlice.reducer;
