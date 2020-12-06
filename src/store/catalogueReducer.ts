import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storeServices from "../services/storeServices";

interface ICatalogState {
  searchString: string;
  filters: string[];
  products: any[];
  cartProducts: any[];
}

const initialState: ICatalogState = {
  searchString: "",
  filters: [],
  products: [],
  cartProducts: []
}

export const fetchProducts: any = createAsyncThunk(
  'catalogue/fetchStoreProducts',
  async () => {
    const response = await storeServices.productList();
    return response.data.products;
  }
)

export const fetchCartProducts: any = createAsyncThunk(
  'catalogue/fetchCartProducts',
  async () => {
    const response = await storeServices.cartProducts();
    return response.data.products;
  }
)

export const updateProduct: any = createAsyncThunk(
  'catalogue/updateProduct',
  async (requestObj: any) => {
    const response = await storeServices.updateProduct(requestObj);
    return response.data.product;
  }
)

const catalogSlice = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
    setSearchString(state, action: PayloadAction<any>) {
      state.searchString = action.payload;
      return state;
    },
    setFilters(state, action: PayloadAction<any>) {
      state.filters = action.payload;
      return state;
    }
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [fetchCartProducts.fulfilled]: (state, action) => {
      state.cartProducts = action.payload;
    }
  }
});

export const { setSearchString, setFilters } = catalogSlice.actions;

export const searchString = (state: any) => state.catalogue.searchString;
export const filters = (state: any) => state.catalogue.filters;

export const products = (state: any) => state.catalogue.products;
export const productById = (state: any, id: number) => {
  let product = state.catalogue.products.find((item: any) => item.id === Number(id));
  return product;
};

export const cartProducts = (state: any) => state.catalogue.cartProducts;

export default catalogSlice.reducer;