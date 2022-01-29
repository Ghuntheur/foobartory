import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  Garbage,
  Inventory,
  ManufacturedProduct,
  RobotInventory,
  SpendItem
} from '@models/index'
import { relativeTime } from '../commons/helpers'

const initialRobotInventory: RobotInventory = {
  foos: 0,
  bars: 0,
  foobars: 0
}

const initialInventory: Garbage = {
  foos: [],
  bars: [],
  foobars: []
}

const initialState: Inventory = {
  ...initialInventory,
  garbage: initialInventory,
  robots: [
    {
      uuid: Date.now().toString(),
      name: 'Bob',
      createdAt: 0,
      inventory: initialRobotInventory
    },
    {
      uuid: (Date.now() + 1).toString(),
      name: 'Pat',
      createdAt: 0,
      inventory: initialRobotInventory
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
    spendManufacturedElements(state, action: PayloadAction<SpendItem[]>) {
      const { payload: elements } = action

      const at = relativeTime()

      elements.forEach(element => {
        const items = state[element.type].splice(0, element.count)
        state.garbage[element.type].push(
          ...items.map(item => ({
            ...item,
            usedAt: at
          }))
        )
      })
    },
    createRobot(state) {
      const date = relativeTime()
      const defaultName = `robot n°${state.robots.length + 1}`
      const name = prompt('Nom', defaultName)

      state.robots.push({
        createdAt: date,
        uuid: date.toString(),
        inventory: initialRobotInventory,
        name: name || defaultName
      })
    }
  },
  extraReducers: builder => {
    builder.addCase(spendManufacturedElements, (state, action) => {
      console.log(state, action)
    })
  }
})

export const {
  createManufacturedElement,
  spendManufacturedElements,
  createRobot
} = inventorySlice.actions
export default inventorySlice.reducer
