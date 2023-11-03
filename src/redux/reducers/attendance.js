import { createSlice } from '@reduxjs/toolkit';
import { updateAll, updateAttendance } from '../actions/attendance';

const initialState = {
  officersList: [
    {
      id: 1,
      officer: 'John',
      role: 'Army Doctor',
      status: null,
      show: false,
      image: require('../../assets/Images/john.jpeg')
    },
    {
      id: 2,
      officer: 'Lestrade',
      role: 'Inspector',
      status: null,
      show: false,
      image: require('../../assets/Images/Lestrade.jpeg')
    },
    {
      id: 3,
      officer: 'Sally',
      role: 'Sergent',
      status: null,
      show: false,
      image: require('../../assets/Images/Sally.jpeg')
    },
    {
      id: 4,
      officer: 'Louise',
      role: 'Chemist',
      status: null,
      show: false,
      image: require('../../assets/Images/Louise.jpeg')
    },
    {
      id: 5,
      officer: 'Anderson',
      role: 'Officer',
      status: null,
      show: false,
      image: require('../../assets/Images/Anderson.jpeg')
    }
  ],
  officersCount: 5
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {},
  extraReducers: {
    [updateAttendance.fulfilled]: (state, action) => ({
      ...state,
      officersList: action.payload
    }),
    [updateAll.fulfilled]: (state, action) => ({
      ...state,
      officersList: action.payload
    })
  }
});

export default attendanceSlice.reducer;
