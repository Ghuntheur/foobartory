import { configureStore } from '@reduxjs/toolkit'
import chrono from '../Interface/Chrono.reducer'
import inventory from '../Inventory/Inventory.reducer'
import robots from '../Robot/Robots.reducer'

export const store = configureStore({
  reducer: { chrono, inventory, robots },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
