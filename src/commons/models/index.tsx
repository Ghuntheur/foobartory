export interface ManufacturedElement {
  createdAt: number
  createdBy: string
}

export interface Foo extends ManufacturedElement {}
export interface Bar extends ManufacturedElement {}

export interface Foobar extends ManufacturedElement {
  mergedAt?: number
}

export interface Inventory {
  foo: Foo[]
  bar: Bar[]
  foobar: Foobar[]
}

export interface Robot {
  uuid: string
  name: string
  createdAt: number
}

export type Location = 'home' | 'fooFactory' | 'barFactory' | 'foobarFactory'
export type ManufacturedProduct = 'foo' | 'bar' | 'foobar'
