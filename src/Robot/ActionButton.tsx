import { ReactNode } from 'react'

interface ActionButtonProps {
  children: ReactNode
  disabled: boolean
  onClick: () => void
}

function ActionButton({ onClick, children, disabled }: ActionButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default ActionButton
