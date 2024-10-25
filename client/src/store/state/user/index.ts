import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from './types';
import { Lang, UserType } from '../../../types';
// import API from '../../../libs/API';

const initialState: UserState = {
  user: undefined,
  lang: Lang.en,
  loading: false,
  error: null,
};

// export const fetchUsers = createAsyncThunk('me/user', async () => {
//   const response = await API.getUser();
//   return response.data;
// });

export const callbackAction = createAsyncThunk(
  'user/callbackAction',
  async (authCode: string, thunkAPI) => {
    try {
      // Replace with the actual endpoint if necessary
      const response = await axios.get<{ success: boolean; accessToken: string }>(`/ds/callback?code=${authCode}`);
      if (response.data.success) {
        // If successful, return the token or any other relevant data
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
    // .addCase(
    //   fetchUsers.pending,
    //   (state: { loading: boolean; error: null | string }) => {
    //     console.log('<< pending');
    //     state.loading = true;
    //     state.error = null;
    //   },
    // )
    // .addCase(
    //   fetchUsers.fulfilled,
    //   (
    //     state: { loading: boolean; user: UserType },
    //     action: PayloadAction<UserType>,
    //   ) => {
    //     state.loading = false;
    //     state.user.name = action.payload?.fullName;
    //   },
    // )
    // .addCase(
    //   fetchUsers.rejected,
    //   (
    //     state: { loading: boolean; error: null | string },
    //     action: { error: { message: string } },
    //   ) => {
    //     console.log('<< ERROR fetchUsers', action.error);
    //     state.loading = false;
    //     state.error = action.error.message || 'Failed to fetch user';
    //   },
    // );
  },
});

export const {
  clearError,
  setLanguage,
  setUser,
} = UserSlice.actions;

export default UserSlice.reducer;
