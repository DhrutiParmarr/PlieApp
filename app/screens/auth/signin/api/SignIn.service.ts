import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import API_ENDPOINTS from '@root/app/core/api.endpoints';
import createAxiosInstance from '@root/app/core/axiosInstance.creater';
import {LOCAL_STORAGE_KEYS} from '@utils/globalConstant';
import {AxiosResponse} from 'axios';

export const asyncUserSignIn = createAsyncThunk<any, any, any>(
  'USER_SIGN_IN',
  async (payload?: any, thunkAPI) => {
    try {
      const axiosInstance = await createAxiosInstance();
      const response: AxiosResponse = await axiosInstance.post(
        API_ENDPOINTS.userSignIn,
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.status === 200) {
        if (response.data && response.data.success) {
          await AsyncStorage.setItem(
            LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
            response.data?.data?.token,
          );
          return thunkAPI.fulfillWithValue(response.data.data.user);
        }
      }
      return thunkAPI.rejectWithValue(response.data);
    } catch (error: any) {
      let errorMessage = 'Something went wrong. Please try again.';
      if (!error.response) {
        errorMessage = 'No internet connection or the server is down.';
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
