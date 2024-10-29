import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from './types';
import { Lang, UserType } from '../../../types';

const initialState: UserState = {
  user: undefined,
  lang: Lang.en,
  loading: false,
  error: null,
};

export const callbackAction = createAsyncThunk(
  'user/callbackAction',
  async (authCode: string, thunkAPI) => {
    try {
      // Replace with the actual endpoint if necessary
      const response = await axios.get<{ success: boolean; accessToken: string }>(`/ds/callback?code=${authCode}`);
      if (response.data.success) {

        return response.data.accessToken;
      } else {
        return thunkAPI.rejectWithValue('Login failed');
      }
    } catch (error) {
      console.error('Error during callbackAction:', error);
      return thunkAPI.rejectWithValue('An error occurred during login');
    }
  }
);

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setLanguage(state, action: PayloadAction<Lang>) {
      state.lang = action.payload;
    },
    setUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    return builder
  },
});

export const {
  clearError,
  setLanguage,
  setUser,
} = UserSlice.actions;

export default UserSlice.reducer;
