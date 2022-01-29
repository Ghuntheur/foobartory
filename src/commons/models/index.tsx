export interface ManufacturedElement {
  createdAt: number
  createdBy: string
}

export interface Foo extends ManufacturedElement {}
export interface Bar extends ManufacturedElement {}

export interface Foobar extends ManufacturedElement {
  mergedAt?: number
}

export interface RobotInventory {
  foos: number
  bars: number
  foobars: number
}

export interface Robot {
  uuid: string
  name: string
  createdAt: number
  inventory: RobotInventory
}

export interface Inventory {
  foos: Foo[]
  bars: Bar[]
  foobars: Foobar[]
  robots: Robot[]
}

export type Location = 'home' | 'fooFactory' | 'barFactory' | 'foobarFactory'
export type Activity = 'wait' | 'mineFoo' | 'mineBar' | 'createFoobar'
export type LocationActivity = Record<Activity, Location>
export type ManufacturedProduct = 'foos' | 'bars' | 'foobars'

export const activityAccordingToLocation: LocationActivity = {
  wait: 'home',
  mineFoo: 'fooFactory',
  mineBar: 'barFactory',
  createFoobar: 'foobarFactory'
}
