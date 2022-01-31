export interface IManufacturedElement {
  createdAt: number
  createdBy: string
  usedAt?: number
}

export interface IFoo extends IManufacturedElement {}
export interface IBar extends IManufacturedElement {}

export interface IFoobar extends IManufacturedElement {
  mergedAt?: number
}

export interface IRobotInventory {
  foos: number
  bars: number
  foobars: number
  foobarsAttempts: number
  foobarsAttemptsFailed: number
}

export interface IRobot {
  uuid: string
  name: string
  createdAt: number
  inventory: IRobotInventory
  lastLocation?: Location
}

export interface IGarbage {
  foos: IFoo[]
  bars: IBar[]
  foobars: IFoobar[]
}

export interface IInventory {
  foos: IFoo[]
  bars: IBar[]
  foobars: IFoobar[]
  garbage: IGarbage
  robots: IRobot[]
  foobarsAttempts: number
  foobarsAttemptsFailed: number
}

export interface ISpendItem {
  type: ManufacturedProduct
  count: number
}

export type Location = 'home' | 'fooFactory' | 'barFactory' | 'foobarFactory'
export type Activity =
  | 'wait'
  | 'mineFoo'
  | 'mineBar'
  | 'createFoobar'
  | 'walking'

export type ManufacturedProduct = 'foos' | 'bars' | 'foobars'
export type WorkStatus = 'success' | 'error' | 'inProgress'

export type LocationActivity = Record<Activity, Location>
export type ActivityDuration = Record<Activity, number | Function>
export type WorkStatusColors = Record<WorkStatus, string>
