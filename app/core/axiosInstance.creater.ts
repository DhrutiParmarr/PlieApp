import AsyncStorage from '@react-native-async-storage/async-storage';
import {appConfig} from '@root/app/core/config';
import {LOCAL_STORAGE_KEYS} from '@utils/globalConstant';
import axios from 'axios';

export interface APIResponse<T = never | any> {
  data: T;
  message: string;
  status?: number;
  success: boolean;
}

const createAxiosInstance = async () => {
  const accessToken = await AsyncStorage.getItem(
    LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
  );
  const instance = axios.create({
    baseURL: appConfig.BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });

  return instance;
};

export default createAxiosInstance;
