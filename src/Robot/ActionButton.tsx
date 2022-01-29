import { ReactNode } from 'react'

interface ActionButtonProps {
  children: ReactNode
  onClick: () => void
}

function ActionButton({ onClick, children }: ActionButtonProps) {
  return <button onClick={onClick}>{children}</button>
}

export default ActionButton
