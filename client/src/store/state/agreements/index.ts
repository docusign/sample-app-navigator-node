// agreementsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AgreementDocumentsState } from './types';
import { AgreementDocument } from '../../../types';
import mockData from "../../../data/mockData";
import axios from "axios";

export const fetchAgreements = createAsyncThunk(
  'agreements/fetchAgreements',
  async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      return rejectWithValue("No access token found. Please log in again.");
    }

    try {
      const response = await axios.get("http://localhost:8080/api/agreements", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }) as any;
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue("Failed to fetch agreements. Please try again later.");
    }
  }
);

export const initialState: AgreementDocumentsState = {
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
    builder
      .addCase(fetchAgreements.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchAgreements.fulfilled, (state, action) => {
        state.loading = false;
        state.agreements = action.payload;
      })
      .addCase(fetchAgreements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = agreementsSlice.actions;

export default agreementsSlice.reducer;
