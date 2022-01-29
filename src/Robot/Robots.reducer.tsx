import { createSlice } from '@reduxjs/toolkit'

import { Robot } from '@models/index'

const initialState: Robot[] = [
  {
    uuid: Date.now().toString(),
    name: 'Bob',
    createdAt: 0
  },
  {
    uuid: (Date.now() + 1).toString(),
    name: 'Pat',
    createdAt: 0
  }
]

const robotsSlice = createSlice({
  name: 'robot',
  initialState,
  reducers: {}
})

export default robotsSlice.reducer
