import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  IGarbage,
  IInventory,
  ManufacturedProduct,
  IRobotInventory,
  ISpendItem
} from '../commons/models'
import { relativeTime } from '../commons/helpers'

const initialRobotInventory: IRobotInventory = {
  foos: 0,
  bars: 0,
  foobars: 0,
  foobarsAttempts: 0,
  foobarsAttemptsFailed: 0
}

const initialInventory: IGarbage = {
  foos: [],
  bars: [],
  foobars: []
}

const initialState: IInventory = {
  ...initialInventory,
  foobarsAttempts: 0,
  foobarsAttemptsFailed: 0,
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
  success?: boolean
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

      const isFoobar = type === 'foobars'

      if (robot) {
        robot.inventory[type] += 1

        if (isFoobar) {
          robot.inventory.foobarsAttempts += 1
        }
      }

      if (isFoobar) {
        state.foobarsAttempts += 1
      }

      state[type].push({
        createdAt: at,
        createdBy,
        ...(type === 'foobars' && {
          mergedAt: at
        })
      })
    },
    spendManufacturedElements(state, action: PayloadAction<ISpendItem[]>) {
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
    },
    addFoobarAttemptFailed(state, action: PayloadAction<{ robot: string }>) {
      const { robot: robotUuid } = action.payload
      const robot = state.robots.find(({ uuid }) => uuid === robotUuid)

      if (robot) {
        robot.inventory.foobarsAttempts += 1
        robot.inventory.foobarsAttemptsFailed += 1
      }

      state.foobarsAttempts += 1
      state.foobarsAttemptsFailed += 1
    }
  }
})

export const {
  createManufacturedElement,
  spendManufacturedElements,
  createRobot,
  addFoobarAttemptFailed
} = inventorySlice.actions
export default inventorySlice.reducer
