import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { insertIf } from '../commons/helpers'
import { useSelector } from '../commons/hooks'

function Chrono() {
  const [time, setTimer] = useState(0)

  const ended = useSelector(store => store.chrono.endAt)

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

    if (ended) {
      clearInterval(chrono)
    }

    return () => clearInterval(chrono)
  })

  return <Typography variant="h4">{formatTime()}</Typography>
}

export default Chrono
