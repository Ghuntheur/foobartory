import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Inventory, ManufacturedProduct, RobotInventory } from '@models/index'
import { relativeTime } from '../commons/helpers'

const initialInventory: RobotInventory = {
  foo: 0,
  bar: 0,
  foobar: 0
}

const initialState: Inventory = {
  foo: [],
  bar: [],
  foobar: [],
  robots: [
    {
      uuid: Date.now().toString(),
      name: 'Bob',
      createdAt: 0,
      inventory: initialInventory
    },
    {
      uuid: (Date.now() + 1).toString(),
      name: 'Pat',
      createdAt: 0,
      inventory: initialInventory
    }
  ]
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
      const robot = state.robots.find(({ uuid }) => uuid === createdBy)
      if (robot) {
        robot.inventory[type] += 1
      }

      state[type].push({ createdAt: relativeTime(), createdBy })
    }
  }
})

export const { createManufacturedElement } = inventorySlice.actions
export default inventorySlice.reducer
