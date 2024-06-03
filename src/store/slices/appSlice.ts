import { createAppSlice } from '@/store/createAppSlice';

import { CreateAppResponse } from '@/types/appType';

export interface appSliceState {
  appList: CreateAppResponse[];
}

const initialState: appSliceState = {
  appList: [],
};

export const appSlice = createAppSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppList: (state, action) => {
      state.appList = action.payload;
    },
  },
});

export const { setAppList } = appSlice.actions;
