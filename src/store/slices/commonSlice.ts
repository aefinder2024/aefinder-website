import { createAppSlice } from '@/store/createAppSlice';

export interface CommonSliceState {
  isLoading: boolean;
  username: string;
}

const initialState: CommonSliceState = {
  isLoading: false,
  username: 'wahaha1234',
};

export const commonSlice = createAppSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setIsLoading, setUsername } = commonSlice.actions;
