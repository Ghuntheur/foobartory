import { Button } from '@mui/material'
import { ReactNode } from 'react'

interface ActionButtonProps {
  children: ReactNode
  disabled: boolean
  onClick: () => void
}

function ActionButton({ onClick, children, disabled }: ActionButtonProps) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      size="small"
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default ActionButton
