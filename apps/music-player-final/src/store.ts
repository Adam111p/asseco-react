import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './player/redux/playerSlice'

export const store = configureStore({
  reducer: {
    player: playerReducer,
  }
})

export type RootStore = ReturnType<typeof store.getState>;
