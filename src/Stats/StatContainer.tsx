import { ReactNode } from 'react'
import { Card, CardContent } from '@mui/material'

import './stat-container.scss'

interface StatContainerProps {
  children: ReactNode
}

function StatContainer({ children }: StatContainerProps) {
  return (
    <Card className="stat-container" variant="outlined">
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default StatContainer
