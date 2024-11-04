import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AgreementDocumentsState } from './types';
import { AgreementDocument } from '../../../types';
import { API_LINKS } from '../../../constants';
import axios from "axios";

export const fetchAgreements = createAsyncThunk(
  'agreements/fetchAgreements',
  async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      return rejectWithValue("No access token found. Please log in again.");
    }

    try {
      const response = await axios.get(API_LINKS.GET_AGREEMENTS, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }) as any;
      return response.data.data as AgreementDocument[];
    } catch (error: any) {
      return rejectWithValue("Failed to fetch agreements. Please try again later.");
    }
  }
);

export const fetchAgreementById = createAsyncThunk(
  'agreements/fetchAgreementById',
  async (agreementId: string, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      return rejectWithValue("No access token found. Please log in again.");
    }

    try {
      const response = await axios.get(`${API_LINKS.GET_AGREEMENTS}/${agreementId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }) as any;

      return response.data.data as AgreementDocument;
    } catch (error: any) {
      return rejectWithValue("Failed to fetch agreements. Please try again later.");
    }
  }
);

export const initialState: AgreementDocumentsState = {
  agreements: [] as AgreementDocument[],
  ctoken: null,
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
    clear: (state) => {
      state.agreements = [] as AgreementDocument[];
      state.ctoken = null;
      state.loading = false;
      state.error = undefined;
    }
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
      })

      .addCase(fetchAgreementById.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchAgreementById.fulfilled, (state, action) => {
        state.loading = false;

        state.agreements = state.agreements.map((agreement) => {
          if (agreement.id === action.payload.id) {
            return {
              ...agreement,
              ...action.payload,
            };
          }
          return agreement;
        });
      })
      .addCase(fetchAgreementById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = agreementsSlice.actions;

export default agreementsSlice.reducer;
