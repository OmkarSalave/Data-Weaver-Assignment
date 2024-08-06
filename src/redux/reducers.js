import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksData: [],
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
    search: "",
    sort: "DESC",
    formLoader: false,
  },
  reducers: {
    setBooksData: (state, action) => {
      state.booksData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setFormLoader: (state, action) => {
      state.formLoader = action.payload;
    },
  },
});

export const {
  setBooksData,
  setLoading,
  setPagination,
  setSearch,
  setSort,
  setFormLoader,
} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
