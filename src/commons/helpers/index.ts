import { startAt } from '../../Interface/Chrono.reducer'

export const insertIf = <T>(predicat: boolean, ...data: T[]): T[] =>
  predicat ? data : []

export const relativeTime = (): number => {
  return (Date.now() - startAt) / 1000
}

export const randomBetween = (min: number, max: number): number =>
  Math.random() * (max - min) + min

export const range = ({
  start = 0,
  end,
  step,
  size = Math.ceil((end - start) / step)
}: {
  start: number
  end: number
  step: number
  size?: number
}): number[] => Array.from({ length: size }, (_, i) => i * step + start)

export const getRanges = (time: number): number[] => {
  const minutes = time / 60

  if (minutes === 1) {
    return range({
      start: 0,
      end: Math.ceil(minutes),
      size: minutes,
      step: 0.1
    })
  }

  if (minutes < 5) {
    return range({
      start: 0,
      end: Math.ceil(minutes),
      size: minutes,
      step: 0.5
    })
  }

  if (minutes > 20) {
    return range({ start: 0, end: Math.ceil(minutes), step: 2 })
  }

  return range({ start: 0, end: Math.ceil(minutes), step: 1 })
}

export const hexToRgb = (hex: string): number[] => {
  const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  if (normal) return normal.slice(1).map(e => parseInt(e, 16))

  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  if (shorthand) return shorthand.slice(1).map(e => 0x11 * parseInt(e, 16))

  return [0, 0, 0]
}
