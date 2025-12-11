import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";
import { addUserToLocalStorage, getUserFromLocalStorage } from "../../utils/localstorage";




const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
}

export const registerUser = createAsyncThunk('user/register', 
    async (user, thunkAPI) => {
   try {
        const resp = await customFetch.post('/auth/testingRegister', user);
        return resp.data;

   } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.msg || "Something went wrong");
   }
})

export const loginUser = createAsyncThunk('user/loginUser', 
    async (user, thunkAPI) => {
      try {
        const resp = await customFetch.post('/auth/login', user);
        return resp.data;

      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.msg || 'Something went wrong');
      }
    
})

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
    // register user
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      // login user
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
  },
})

export default UserSlice.reducer;