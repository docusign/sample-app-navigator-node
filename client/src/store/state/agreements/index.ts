import { createSlice } from '@reduxjs/toolkit';
import { AgreementDocumentsState } from './types';
import { AgreementDocument } from '../../../types';
import mockData from "../../../data/mockData";

export const initialState: AgreementDocumentsState = {
  // agreements: [] as AgreementDocument[],
  // ctoken: null,
  agreements: mockData.agreementDocuments as AgreementDocument[],
  ctoken: mockData.ctoken,
  loading: false,
  error: undefined,
};

const agreementsSlice = createSlice({
  name: 'agreements',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    return builder
  },
});

export const { clearError } = agreementsSlice.actions;

export default agreementsSlice.reducer;
