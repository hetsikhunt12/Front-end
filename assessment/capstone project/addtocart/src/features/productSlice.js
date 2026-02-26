import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3002/product";

// GET
export const getProducts = createAsyncThunk(
  "products/get",
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);

// ADD
export const addProduct = createAsyncThunk(
  "products/add",
  async (data) => {
    const res = await axios.post(API, data);
    return res.data;
  }
);

// DELETE
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id) => {
    await axios.delete(`${API}/${id}`);
    return id;
  }
);

// UPDATE
export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, data }) => {
    const res = await axios.put(`${API}/${id}`, data);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products =
          state.products.filter(p => p.id !== action.payload);
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          p => p.id === action.payload.id
        );
        state.products[index] = action.payload;
      });
  },
});

export default productSlice.reducer;


