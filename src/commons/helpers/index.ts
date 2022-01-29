import { startAt } from '../../Interface/Chrono.reducer'

export const insertIf = <T>(predicat: boolean, ...data: T[]): T[] =>
  predicat ? data : []

export const relativeTime = (): number => {
  return (Date.now() - startAt) / 1000
}

export const randomBetween = (min: number, max: number): number =>
  Math.random() * (max - min) + min
