import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Inventory, ManufacturedProduct, RobotInventory } from '@models/index'
import { relativeTime } from '../commons/helpers'

const initialInventory: RobotInventory = {
  foos: 0,
  bars: 0,
  foobars: 0
}

const initialState: Inventory = {
  foos: [],
  bars: [],
  foobars: [],
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
      const at = relativeTime()

      if (robot) {
        robot.inventory[type] += 1
      }

      state[type].push({
        createdAt: at,
        createdBy,
        ...(type === 'foobars' && {
          mergedAt: at
        })
      })
    },
    createRobot(state) {
      const date = relativeTime()
      const defaultName = `robot n°${state.robots.length + 1}`
      const name = prompt('Nom', defaultName)

      state.robots.push({
        createdAt: date,
        uuid: date.toString(),
        inventory: initialInventory,
        name: name || defaultName
      })
    }
  }
})

export const { createManufacturedElement, createRobot } = inventorySlice.actions
export default inventorySlice.reducer
