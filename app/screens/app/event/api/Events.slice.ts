import {createSlice} from '@reduxjs/toolkit';
import {IDefaultTypes, RootState} from '@root/app/store/store.type';
import {asyncGetEventList} from '@screens/app/event/api/Events.service';
import {IEventType} from '@screens/app/event/ui/EventList.constant';

const sliceName = 'eventListModule';

export interface EventListProps {
  eventDetail: IDefaultTypes;
}

const initialState: EventListProps = {
  eventDetail: {
    currentRequestId: undefined,
    isLoading: false,
    error: null,
    data: null,
  },
};

const EventListModuleSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      state.eventDetail.data = state.eventDetail.data.map(event =>
        event.event_date_id === action.payload
          ? {...event, isFavorite: !event.isFavorite}
          : event,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(asyncGetEventList.pending, (state, action) => {
        const {requestId} = action.meta;
        state.eventDetail.isLoading = true;
        state.eventDetail.currentRequestId = requestId;
      })
      .addCase(asyncGetEventList.fulfilled, (state, action) => {
        const {requestId} = action.meta;
        if (
          state.eventDetail.isLoading &&
          state.eventDetail.currentRequestId === requestId
        ) {
          state.eventDetail.isLoading = false;
          state.eventDetail.data = action.payload;
          state.eventDetail.currentRequestId = undefined;
          state.eventDetail.error = null;
        }
      })
      .addCase(asyncGetEventList.rejected, (state, action) => {
        const {requestId} = action.meta;
        if (
          state.eventDetail.isLoading &&
          state.eventDetail.currentRequestId === requestId
        ) {
          state.eventDetail.isLoading = false;
          state.eventDetail.error = action.error;
          state.eventDetail.currentRequestId = undefined;
        }
      });
  },
});

// Actions
export const eventListAction = EventListModuleSlice.actions;

// Selectors
export const getEventListDataSelector = (state: RootState) => {
  return state.eventListModule;
};

export const getAllEventListSelector = (state: RootState) => {
  return state.eventListModule.eventDetail;
};

export const getAllFavoriteEventSelector = (state: RootState) => {
  return state.eventListModule.eventDetail?.data?.filter(
    (event: IEventType) => event.isFavorite === true,
  );
};

// Reducer
const eventListModuleSliceReducer = EventListModuleSlice.reducer;
export default eventListModuleSliceReducer;
