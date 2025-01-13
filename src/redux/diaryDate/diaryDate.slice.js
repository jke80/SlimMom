import { createSlice } from '@reduxjs/toolkit';
import { dateToStr } from 'utils/formatedDate';

const diaryDateInitialState = dateToStr(new Date());
const diaryDateSlice = createSlice({
  name: 'diaryDate',
  initialState: diaryDateInitialState,
  reducers: {
    setDiaryDate(_, { payload }) {
      return payload;
    },
  },
});

export const { setDiaryDate } = diaryDateSlice.actions;
export default diaryDateSlice.reducer;
