import {createAsyncThunk} from '@reduxjs/toolkit';
import API_ENDPOINTS from '@root/app/core/api.endpoints';
import createAxiosInstance from '@root/app/core/axiosInstance.creater';
import {AxiosResponse} from 'axios';

export const asyncGetEventList = createAsyncThunk<any, any, any>(
  'GET_EVENT_LIST',
  async (payload?: any, thunkAPI) => {
    try {
      const axiosInstance = await createAxiosInstance();
      const response: AxiosResponse = await axiosInstance.post(
        API_ENDPOINTS.allEvents,
        payload,
      );
      if (response.status === 200) {
        if (response.data && response.data.success) {
          if (response.data?.data.events) {
            return thunkAPI.fulfillWithValue(response.data?.data?.events);
          }
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
