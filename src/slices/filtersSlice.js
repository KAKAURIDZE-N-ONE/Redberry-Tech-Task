import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minPrice: "",
  maxPrice: "",
  minArea: "",
  maxArea: "",
  lastOpenedFilter: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    updateMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
    updateMinArea(state, action) {
      state.minArea = action.payload;
    },
    updateMaxArea(state, action) {
      state.maxArea = action.payload;
    },
    updateLastOpenedFilter(state, action) {
      state.lastOpenedFilter = action.payload;
    },
  },
});

export const {
  updateMaxArea,
  updateMaxPrice,
  updateMinArea,
  updateMinPrice,
  updateLastOpenedFilter,
} = filtersSlice.actions;

export const getMinPrice = (store) => store.filters.minPrice;
export const getMaxPrice = (store) => store.filters.maxPrice;
export const getMinArea = (store) => store.filters.minArea;
export const getMaxArea = (store) => store.filters.maxArea;
export const getLastOpenedFilter = (store) => store.filters.lastOpenedFilter;

export default filtersSlice.reducer;
