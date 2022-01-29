import { createSlice } from '@reduxjs/toolkit'

interface ChronoState {
  startAt: number
  endAt: number | null
}

const initialState: ChronoState = {
  startAt: Date.now(),
  endAt: null
}

const chronoSlice = createSlice({
  name: 'chrono',
  initialState,
  reducers: {
    setEndAt(state) {
      state.endAt = Date.now()
    }
  }
})

export const { setEndAt } = chronoSlice.actions
export const { startAt } = chronoSlice.getInitialState()
export default chronoSlice.reducer
