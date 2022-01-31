import Chip from '@mui/material/Chip'

import Typography from '@mui/material/Typography'
import { insertIf } from '../commons/helpers'

import './inventory-item.scss'

interface InventoryItemProps {
  name: string
  count: number
  isRobot?: boolean
}

function InventoryItem({ name, count, isRobot = false }: InventoryItemProps) {
  return (
    <div
      className={[
        'inventory-item-container',
        ...insertIf(isRobot, 'robot')
      ].join(' ')}
    >
      <Typography variant={isRobot ? 'body2' : 'subtitle1'}>{name}</Typography>
      <Chip
        label={count}
        size={isRobot ? 'small' : 'medium'}
        className="chip"
      />
    </div>
  )
}

export default InventoryItem
