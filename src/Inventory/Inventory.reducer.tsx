import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Inventory, ManufacturedProduct } from '@models/index'
import { relativeTime } from '../commons/helpers'

const initialState: Inventory = {
  foo: [],
  bar: [],
  foobar: []
}

interface createManufacturedElementPayload {
  type: ManufacturedProduct
  createdBy: string
}

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    createManufacturedElement(
      state,
      action: PayloadAction<createManufacturedElementPayload>
    ) {
      const { type, createdBy } = action.payload
      state[type].push({ createdAt: relativeTime(), createdBy })
    }
  }
})

export const { createManufacturedElement } = inventorySlice.actions
export default inventorySlice.reducer
