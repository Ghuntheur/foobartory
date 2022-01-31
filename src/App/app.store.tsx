import { configureStore } from '@reduxjs/toolkit'
import chrono from '../Hud/Chrono.reducer'
import inventory from '../Inventory/Inventory.reducer'

export const store = configureStore({
  reducer: { chrono, inventory },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
