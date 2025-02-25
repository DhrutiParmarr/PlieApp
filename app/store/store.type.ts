export interface IDefaultTypes {
  currentRequestId: string | undefined;
  isLoading: boolean;
  error: any;
  data: any;
}

import {rootReducers} from '@root/app/store';
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

export const DESTROY_SESSION = 'destroy_session';
export type RootState = ReturnType<typeof rootReducers>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
