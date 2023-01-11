import { createSlice } from '@reduxjs/toolkit';

type State = {
  songs: { [ key: string ]: number }
}

const initialState: State = {
  songs: {}
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    incrementPlays: (state, action) => {
      const { id } = action.payload;
      state.songs[id] = (state.songs[id] || 0) + 1;
    },
    clearAllCount: (state, action) => {
        state.songs = {};
    }
  },
})

export const { incrementPlays ,clearAllCount } = playerSlice.actions;

export default playerSlice.reducer;
