import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

import './inventory-item.scss'

interface InventoryItemProps {
  name: string
  count: number
}

function InventoryItem({ name, count }: InventoryItemProps) {
  return (
    <div className="inventory-item-container">
      <Typography variant="subtitle1">{name}</Typography>
      <Chip label={count} />
    </div>
  )
}

export default InventoryItem
