import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API URL
const API = "http://localhost:3000/product";
// GET
export const getProducts = createAsyncThunk(
  "products/get",
  async () => {
    const res = await fetch(API);
    return await res.json();
  }
);

// ADD
export const addProduct = createAsyncThunk(
  "products/add",
  async (data) => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return await res.json();
  }
);

// DELETE
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    return id;
  }
);

// UPDATE
export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, data }) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return await res.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // GET
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })

      // ADD
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      // DELETE
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products =
          state.products.filter(p => p.id !== action.payload);
      })

      // UPDATE
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          p => p.id === action.payload.id
        );
        state.products[index] = action.payload;
      });
  }
});

export default productSlice.reducer;