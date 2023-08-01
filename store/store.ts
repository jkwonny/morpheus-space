import { CDMDataProps } from '@/types/CDMData';
import { configureStore, createSlice } from '@reduxjs/toolkit';

export type State = {
  selectedId: number | null;
  CDMData: CDMDataProps[];
};

const initialState: State = {
  selectedId: null,
  CDMData: [],
};

const cdmSlice = createSlice({
  name: 'cdm',
  initialState,
  reducers: {
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
    setCDMData: (state, action) => {
      state.CDMData = action.payload;
    },
  },
});

export const { setSelectedId, setCDMData } = cdmSlice.actions;

const store = configureStore({
  reducer: cdmSlice.reducer,
});

export default store;
