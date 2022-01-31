import { ReactNode } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import './stat-container.scss'

interface StatContainerProps {
  title: string
  children: ReactNode
}

function StatContainer({ title, children }: StatContainerProps) {
  return (
    <Card className="stat-container" variant="outlined">
      <CardContent>
        <Typography variant="h4" className="title">
          {title}
        </Typography>
        <div>{children}</div>
      </CardContent>
    </Card>
  )
}

export default StatContainer
