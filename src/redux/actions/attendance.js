import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateAttendance = createAsyncThunk(
  'attendance/updateAttendance',
  async (list, { getState }) => {
    const state = getState();
    let { officersList } = state.attendance;
    officersList = await officersList.map((res) => {
      if (res.id === list.id) {
        return { ...list };
      }
      return res;
    });
    return officersList;
  }
);

export const updateAll = createAsyncThunk('attendance/updateAll', async (list) => {
  return list;
});
