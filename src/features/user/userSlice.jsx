import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
    isLoading: false,
    user: null,
}

export const regiserUser = createAsyncThunk('user/register', 
    async (user, thunkAPI) => {
   try {
        const resp = await customFetch.post('/auth/testingRegister', user);
        return resp.data;

   } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
   }
})

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    console.log(`Login user: ${JSON.stringify(user)}`);
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(regiserUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regiserUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(regiserUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default userSlice.reducer;