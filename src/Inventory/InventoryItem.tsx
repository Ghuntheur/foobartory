import { useSelector } from '../commons/hooks'
import { ManufacturedProduct } from '../commons/models'

import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

interface InventoryItemProps {
  name: ManufacturedProduct | 'robots'
}

function InventoryItem({ name }: InventoryItemProps) {
  const count = useSelector(state => state.inventory[name].length)

  return (
    <div className="inventory-item-container">
      <Typography variant="subtitle1">{name}</Typography>
      <Chip label={count} />
    </div>
  )
}

export default InventoryItem
