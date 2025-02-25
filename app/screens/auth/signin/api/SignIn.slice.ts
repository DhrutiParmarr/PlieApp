import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@root/app/store/store.type';
import {asyncUserSignIn} from '@screens/auth/signin/api/SignIn.service';

const sliceName = 'signInModule';

export interface ISignInProps {
  userData: {
    currentRequestId: string | undefined;
    isLoading: boolean;
    error: any;
    data: any;
  };
}

const initialState: ISignInProps = {
  userData: {
    currentRequestId: undefined,
    isLoading: false,
    error: null,
    data: null,
  },
};

const signInModuleSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    userDetail: (state, action: PayloadAction<any>) => {
      state.userData.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(asyncUserSignIn.pending, (state, action) => {
        const {requestId} = action.meta;
        state.userData.isLoading = true;
        state.userData.currentRequestId = requestId;
      })
      .addCase(asyncUserSignIn.fulfilled, (state, action) => {
        const {requestId} = action.meta;
        if (
          state.userData.isLoading &&
          state.userData.currentRequestId === requestId
        ) {
          state.userData.isLoading = false;
          state.userData.data = action.payload;
          state.userData.currentRequestId = undefined;
          state.userData.error = null;
        }
      })
      .addCase(asyncUserSignIn.rejected, (state, action) => {
        const {requestId} = action.meta;
        if (
          state.userData.isLoading &&
          state.userData.currentRequestId === requestId
        ) {
          state.userData.isLoading = false;
          state.userData.error = action.error;
          state.userData.currentRequestId = undefined;
        }
      });
  },
});

// Actions
export const signInActions = signInModuleSlice.actions;

// Selectors
export const getSignInDataSelector = (state: RootState) => {
  return state.signInModule;
};

export const getUserDataSelector = (state: RootState) => {
  return state.signInModule.userData?.data;
};

// Reducer
const signInModuleSliceReducer = signInModuleSlice.reducer;
export default signInModuleSliceReducer;
