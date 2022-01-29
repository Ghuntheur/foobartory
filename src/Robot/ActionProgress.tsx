import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'

interface ActionProgressProps {
  duration: number // en s
}

function ActionProgress({ duration }: ActionProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const steps = 20
    const timeInMs = duration * 1000

    const chrono = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          return 100
        }

        return prevProgress + 100 / steps
      })
    }, timeInMs / steps)

    return () => {
      clearInterval(chrono)
    }
  })

  return <CircularProgress variant="determinate" value={progress} />
}

export default ActionProgress
