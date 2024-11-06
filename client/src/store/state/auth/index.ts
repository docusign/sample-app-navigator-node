import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState } from './types';
import axios from 'axios';
import { API_LINKS } from '../../../constants';

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  error: null,
  loading: false
};

export const logoutAction = createAsyncThunk(
  'auth/logoutAction',
  async (_, thunkAPI) => {
    try {
      const logoutUrl = API_LINKS.LOGOUT;
      await axios.post(logoutUrl, {}, { withCredentials: true });

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expiresIn");

    } catch (error) {
      return thunkAPI.rejectWithValue('An error occurred during logout');
    }
  }
);

export const loginWithJWTAction = createAsyncThunk(
  'auth/loginWithJWTAction',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${API_LINKS.AUTHORIZE_TEST_1}/ds/authorize`,
        {
          withCredentials: true,
        }
      );

      const data = response.data as any;
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("expiresIn", data.expiresIn);
        return data.accessToken;
      } else {
        console.error("JWT login failed:", data.message);
      }

    } catch (error) {
      return thunkAPI.rejectWithValue('An error occurred during login');
    }
  }
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    clear: (state) => {
      state.isAuthenticated = false;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.accessToken = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginWithJWTAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithJWTAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.accessToken = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginWithJWTAction.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.accessToken = null;
        state.error = action.payload as string;
      });
  },
});

export const {
  clearError,
  clear,
  setIsAuthenticated,
} = AuthSlice.actions;

export default AuthSlice.reducer;
