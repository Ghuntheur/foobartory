import { useEffect, useState } from 'react'

import { insertIf } from '../commons/helpers'

function Chrono() {
  const [time, setTimer] = useState(0)

  const formatTime = (): string => {
    const seconds = time % 60
    const minutes = Math.floor(time / 60) % 60
    const hours = time / 3600

    return [
      ...insertIf(hours > 1, hours),
      `0${minutes.toString()}`.slice(-2),
      `0${seconds.toString()}`.slice(-2)
    ].join(' : ')
  }

  useEffect(() => {
    const chrono = setInterval(() => setTimer(time + 1), 1000)
    return () => clearInterval(chrono)
  })

  return (
    <div>
      <div>{formatTime()}</div>
    </div>
  )
}

export default Chrono
