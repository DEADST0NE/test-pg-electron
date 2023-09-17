import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../query";


type InitialState = {
  loading: boolean;
  error: any | null;
  data: any;
};

const initialState: InitialState = {
  loading: false,
  error: null,
  data: [],
};

export const getDataReport = createAsyncThunk(
  "reports/get",
  async () => {
    const db = await client();
    const res = await db.get();
    return res;
  }
);

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataReport.pending, (state) => {
      state = {
        ...state,
        error: null,
        loading: true,
      };
      return state;
    });
    builder.addCase(getDataReport.rejected, (state, action) => {
      state = {
        ...state,
        error: action.payload,
        loading: false,
      };
      return state;
    });
    builder.addCase(getDataReport.fulfilled, (state, action) => {
      state = {
        data: action.payload,
        error: null,
        loading: false,
      };
      return state;
    });
  },
});

const { reducer } = reportsSlice;
export default reducer;
