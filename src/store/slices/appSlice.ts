import { createAppSlice } from '@/store/createAppSlice';

import { CreateAppResponse } from '@/types/appType';

export interface appSliceState {
  currentAppDetail: CreateAppResponse;
  appList: CreateAppResponse[];
}

const initialState: appSliceState = {
  currentAppDetail: {} as CreateAppResponse,
  appList: [],
};

export const appSlice = createAppSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppList: (state, action) => {
      state.appList = action.payload;
    },
    setCurrentAppDetail: (state, action) => {
      state.currentAppDetail = action.payload;
    },
  },
});

export const { setAppList, setCurrentAppDetail } = appSlice.actions;
